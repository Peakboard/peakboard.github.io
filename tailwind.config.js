module.exports = {
    purge: [
        '_includes/*.html',
        '_includes/*.md',
        '_layouts/*.html',
        '_layouts/*.md',
        '_posts/*.md',
        'js/*.js',
        '*.html',
        '*.md'
    ],
    theme: {
        extend: {
            padding: {
                '1/2': '50%',
                '1/3': '33.333333%',
                '2/3': '66.666667%',
                '1/4': '25%',
                '2/4': '50%',
                '3/4': '75%',
                '1/5': '20%',
                '2/5': '40%',
                '3/5': '60%',
                '4/5': '80%',
                '1/6': '16.666667%',
                '2/6': '33.333333%',
                '3/6': '50%',
                '4/6': '66.666667%',
                '5/6': '83.333333%',
                '1/12': '8.333333%',
                '2/12': '16.666667%',
                '3/12': '25%',
                '4/12': '33.333333%',
                '5/12': '41.666667%',
                '6/12': '50%',
                '7/12': '58.333333%',
                '8/12': '66.666667%',
                '9/12': '75%',
                '10/12': '83.333333%',
                '11/12': '91.666667%',
                full: '100%',
            },
            colors: {
                "dark-black": "#111111",
                "grey-darker": "#4a5556",
                "grey-dark": "#606f7b",
                "grey-darkest": "#373d3f",
                grey: "#b8c2cc",
                "grey-light": "#dae1e7",
                "grey-lighter": "#f1f5f8",
                "grey-lightest": "#f0f1f2",
                "orange-darkest": "#462a16",
                "orange-darker": "#613b1f",
                "orange-dark": "#de751f",
                orange: "#f68510",
                "orange-light": "#faad63",
                "orange-lighter": "#fcd9b6",
                "orange-lightest": "#fff5eb",
            }
        },
        fontFamily: {
            title: ['Roboto'],
            regular: ['Open Sans'],
            sans: [
                "Roboto",
                "Open Sans",
                "Helvetica Neue",
                "sans-serif"
            ],
            serif: [
                "Roboto",
                "Georgia",
                "serif"
            ],
            mono: [
                "Menlo",
                "Monaco",
                "Consolas",
                "Liberation Mono",
                "Courier New",
                "monospace"
            ]
        },
        screens: {
            sm: "576px",
            md: "768px",
            lg: "992px",
            xl: "1290px"
        },
        maxWidth: {
            xxs: "10rem",
            xs: "20rem",
            sm: "30rem",
            md: "40rem",
            lg: "50rem",
            xl: "60rem",
            "2xl": "70rem",
            "3xl": "80rem",
            "4xl": "90rem",
            "5xl": "100rem",
            full: "100%"
        },
        fontSize: {
            xs: ['0.75rem', { }],
            sm: ['0.875rem', { }],
            base: ['1rem', { }],
            lg: ['1.125rem', { }],
            xl: ['1.25rem', { }],
            '2xl': ['1.5rem', { }],
            '3xl': ['1.875rem', { }],
            '4xl': ['2.25rem', { }],
            '5xl': ['3rem', { }],
            '6xl': ['3.75rem', { }],
            '7xl': ['4.5rem', { }],
            '8xl': ['6rem', { }],
            '9xl': ['8rem', { }],
        },
        letterSpacing: {
            tighter: '-0.07em',
            tight: '-0.05em',
            normal: '0em',
            wide: '0.05em',
            wider: '0.07em',
            widest: '0.1em',
        },
    },
    variants: {
        extend: {
            backgroundColor: ['group-focus', 'active'],
            borderColor: ['group-focus'],
            boxShadow: ['group-focus'],
            opacity: ['group-focus'],
            textColor: ['group-focus', 'active'],
            textDecoration: ['group-focus'],
        }
    },
    plugins: [
        require('@tailwindcss/forms'),
        require('@tailwindcss/typography'),
        require('@tailwindcss/aspect-ratio'),
    ],
    future: {
        removeDeprecatedGapUtilities: true,
        purgeLayersByDefault: true,
    }
};
