### Lakeview Africa Gospel Church website

The website was refactored from vanilla react to gatsby js, a server side rendering framework for react, in order to take advantages of gatsby magic; server side rendering, SEO ,bundle sizing and image handling.

The static website serves it static files in app, no API calls

### Accesss

The site is available on [Lakeview AGC website](http://www.lakeviewagc.net) and [Netlify](https://www.lakeview.netlify.com)

The source code is available on [Github](https://www.github.com/kipyegonline/lakeview-gatsby)

### Author

Vince Kipyegon [Vince](https://www.github.com/kipyegonline)

[@kipyegonline](https://www.twitter.com/kipyegonline)

## 🚀 Quick start

This section provides guidelines on how to use initialize Gatsby js projects, courtesy of Gatsby js....

1.  **Create a Gatsby site.**

    Use the Gatsby CLI to create a new site, specifying the default starter.

    ```shell
    # create a new Gatsby site using the default starter
    run npm gatsby-cli -g
    ```

1.  **Start developing.**

    Navigate into your new site’s directory and start it up.

    ```shell
    1. run npm install
    ```


    2. gatsby develop
    ```

1.  **Open the source code and start editing!**

## 🧐 What's inside?

1.  **`/node_modules`**: This directory contains all of the modules of code that your project depends on (npm packages) are automatically installed.

2.  **`/src`**: This directory will contain all of the code related to what you will see on the front-end of your site (what you see in the browser) such as your site header or a page template. `src` is a convention for “source code”.

3.  **`.gitignore`**: This file tells git which files it should not track / not maintain a version history for.

4.  **`.prettierrc`**: This is a configuration file for [Prettier](https://prettier.io/). Prettier is a tool to help keep the formatting of your code consistent.

5.  **`gatsby-browser.js`**: This file is where Gatsby expects to find any usage of the [Gatsby browser APIs](https://www.gatsbyjs.org/docs/browser-apis/) (if any). These allow customization/extension of default Gatsby settings affecting the browser.

6.  **`gatsby-config.js`**: This is the main configuration file for a Gatsby site. This is where you can specify information about your site (metadata) like the site title and description, which Gatsby plugins you’d like to include, etc. (Check out the [config docs](https://www.gatsbyjs.org/docs/gatsby-config/) for more detail).

7.  **`gatsby-node.js`**: This file is where Gatsby expects to find any usage of the [Gatsby Node APIs](https://www.gatsbyjs.org/docs/node-apis/) (if any). These allow customization/extension of default Gatsby settings affecting pieces of the site build process.

8.  **`gatsby-ssr.js`**: This file is where Gatsby expects to find any usage of the [Gatsby server-side rendering APIs](https://www.gatsbyjs.org/docs/ssr-apis/) (if any). These allow customization of default Gatsby settings affecting server-side rendering.

9.  **`LICENSE`**: This Gatsby starter is licensed under the 0BSD license. This means that you can see this file as a placeholder and replace it with your own license.

10. **`package-lock.json`** (See `package.json` below, first). This is an automatically generated file based on the exact versions of your npm dependencies that were installed for your project. **(You won’t change this file directly).**

11. **`package.json`**: A manifest file for Node.js projects, which includes things like metadata (the project’s name, author, etc). This manifest is how npm knows which packages to install for your project.

- **To dive straight into code samples, head [to our documentation](https://www.gatsbyjs.org/docs/).** In particular, check out the _Guides_, _API Reference_, and _Advanced Tutorials_ sections in the sidebar.

## Hitches

The following pages hae an issue in development and production
Header.jsx,contactus.jsx,about.jsx (2),academy.jsx and Layout.jsx

The problem is development environmemt doesn't support `globalThis` while prod supports it...so it shuld be removed on development then added when ready to build..headache!... :)

## Buildin

Run gatsby build and project will automatically be built on a public folder if theres no err....

## 💫 Deployment

The project is available on Netlify....

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://lakeview.netlify.com)

And Lakeview AGC website.....
[Lakeview](http://lakeviewagc.net)

<!-- AUTO-GENERATED-CONTENT:END -->
