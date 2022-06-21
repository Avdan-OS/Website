<div align="center">

# **AvdanOS**.com Website

**The AvdanOS homepage is built using NextJS and GeistUI**, which support both **_Markdown_** and **_JavaScript_** to fit the needs of the contributors to the project.

| :warning: | **avdan-os.github.io's code is in the dev branch. Commits to the main branch will be ignored.** <br> | &nbsp;&nbsp;&nbsp;&nbsp;[CONTRIBUTE](https://github.com/Avdan-OS/avdan-os.github.io/tree/dev)&nbsp;&nbsp;&nbsp;&nbsp; |
| --------- | :--------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |

![Banner](https://raw.githubusercontent.com/Avdan-OS/.github/main/banner/Website.png)

[![pages-build-deployment](https://github.com/Avdan-OS/avdan-os.github.io/actions/workflows/pages/pages-build-deployment/badge.svg)](https://github.com/Avdan-OS/avdan-os.github.io/actions/workflows/pages/pages-build-deployment)
[![NPM Dev site Deploy](https://github.com/Avdan-OS/avdan-os.github.io/actions/workflows/npm-deploy.yml/badge.svg)](https://github.com/Avdan-OS/avdan-os.github.io/actions/workflows/npm-deploy.yml)
[![NPM Dev site CI/CD](https://github.com/Avdan-OS/avdan-os.github.io/actions/workflows/npm-test.js.yml/badge.svg)](https://github.com/Avdan-OS/avdan-os.github.io/actions/workflows/npm-test.js.yml)

</div>

## Project Structure

- `./src` contains the nextjs source code for the website.
- `./cdn` contains the raw cdn files that auto deploy to **cdn.avdanos.com**

## Getting Started

Make sure you have NodeJS 14 or later installed.

```sh
$ cd src
$ npm install
$ npm run dev
```

Then head over to [localhost:3000](http://localhost:3000) to see the site live!

The page will reload if you make edits.

You will also see any lint errors in the console.

## Contribution

### Compatibility

Makesure everything works on mobile before merging. To make a page compatible with all width, there is a hook `'@/lib/dynamic-width'` import it and use it to make the page adaptive.

Also, test on at least two browser engines (eg. Firefox with gecko engine and Brave based on Chromium project).

If things don't fully work and you want to release a beta to the public, you can also make the page opt in beta page (see the BetaPopup component) or show a warning message (indecating to the user that it is likely to break).

If you are making a page without the help of any designer or other developers, try to follow the design. This can be easily done by using the geist-ui and not change too much properties.

### Code Quality

For tsx, please follow the [Airbnb style guide](https://airbnb.io/javascript/react/). For CSS, please follow [this guide](https://www.freecodecamp.org/news/css-naming-conventions-that-will-save-you-hours-of-debugging-35cea737d849/).

### Pull Request

It's recommended that you have a concise list of change when making pull request to make the review process faster. Also, makesure the page builds on your fork before making a pull request.

Again, **remember to use dev branch!!!** Committing to master branch will be automatically overwritten.
