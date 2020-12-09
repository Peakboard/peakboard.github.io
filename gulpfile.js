const gulp = require('gulp');
const csso = require('gulp-csso');
const sass = require('gulp-sass');
const postcss = require('gulp-postcss');
const terser = require('gulp-terser');
const concat = require('gulp-concat');
const webpack = require('webpack-stream');
const webp = require('gulp-webp');

gulp.task('style', function () {
    const tailwindCss = require('tailwindcss');

    let stream = gulp.src('resources/sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(postcss([
            tailwindCss('./tailwind.config.js'),
            require('autoprefixer'),
        ]));

    stream = stream
        .pipe(csso())
        .pipe(gulp.dest('./assets/'));

    return stream;
});

gulp.task('js', async function () {
    let stream = gulp.src(['./resources/js/**/*.js']);

    stream = stream.pipe(webpack({
        mode: 'none'
    }));

    stream = stream.pipe(terser({
        keep_fnames: false,
        mangle: true
    }));

    stream = stream.pipe(concat('app.js'));

    stream = stream.pipe(gulp.dest('./assets/'));

    return stream;
});



/**gulp.task('images', async function () {
    return gulp.src(['./resources/.jpg', './resources/*.png'])
        .pipe(webp())
        .pipe(gulp.dest('./resources/optimized'));
});**/

gulp.task('default', gulp.series('style','js'));
gulp.task('build', gulp.series('style','js'));
