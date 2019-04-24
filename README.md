# Data Translator

This is the first draft of a site outline built with [Gatsby](https://www.gatsbyjs.org).

## Project Structure

The structure of the project is shown below.

```bash
$ tree -L 2
.
├── gatsby-browser.js
├── gatsby-config.js
├── gatsby-node.js
├── gatsby-ssr.js
├── LICENSE
├── node_modules
│   ...
├── package.json
├── package-lock.json
├── public
│   ├── icons
│   ├── index.html
│   ├── manifest.webmanifest
│   └── static
├── README.md
└── src
    ├── components
    ├── images
    ├── pages
    ├── styles
    └── templates
```

### Pages

Pages can be added by creating [Markdown](https://www.markdownguide.org/cheat-sheet/) files in the `src/pages` directory. Each markdown file must follow a predefined format, as illusrated below.

```bash
$ cat /src/pages/about-gamma.md
---
path: "/about/gamma"
title: "Gamma"
date: "2019-04-20"
author: "dt"
seo:
    title: "Gamma"
    keywords: "data translator renci"
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis, porro!"
---


Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, reiciendis minus, perspiciatis aut eligendi blanditiis esse nobis magnam qui, quam expedita odit, natus temporibus aliquam consequatur porro reprehenderit odio asperiores.

...
```

The first chunk of the file contains the "frontmatter", which lives between the two sets of triple dashes (`---`).

- `path` - This indicates the path the relative broswer will visit to access the page.
- `title` - This defines the page title.
- `date` - This isn't really used for our purposes, but I've included it to illustrate items that may live in this section. This would be used in mre of a blogging type of application.
- `author` - same as above
- `seo` - This contains attributes to define properties for [search engine optimization](https://moz.com/beginners-guide-to-seo)

Below the frontmatter will be the actual [Markdown](https://www.markdownguide.org/cheat-sheet/) that will be rendered as HTML on the page.

## Develop

`$ gatsby develop` spins up a development server locally, served on part 8000.

## Deploy

This site is deployed to Github Pages with a `gh-pages` Node module. To deploy, execute `npm deploy`. The configuration for this deployment lives in a script within the `  package.json` file.

## About Gatsby

Looking for more about Gatsby? Full documentation for Gatsby lives [on the website](https://www.gatsbyjs.org/). Here are some places to start:

- **For most developers, we recommend starting with our [in-depth tutorial for creating a site with Gatsby](https://www.gatsbyjs.org/tutorial/).** It starts with zero assumptions about your level of ability and walks through every step of the process.

- **To dive straight into code samples, head [to our documentation](https://www.gatsbyjs.org/docs/).** In particular, check out the _Guides_, _API Reference_, and _Advanced Tutorials_ sections in the sidebar.
