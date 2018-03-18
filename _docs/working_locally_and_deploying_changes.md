# Working locally and deploying changes

To run the site locally so that you may view your content before you commit to the master brach (which deploys the site automatically) you will need to install [Jekyll](https://jekyllrb.com/docs/installation/).

Once installed, just run the command `jekyll serve` from the root directory where your local version of the site repo is located and Jekyll will watch for changes and serve the site, normally at `https://127.0.0.1:4000`.

### If using GitHub Pages

If the site is hosted on GitHub Pages, building for production (as far as Jekyll is concerned) will be handled by GitHub automatically. Every time the master branch on GitHub receives a commit, it will rebuild and deploy the latest changes.
