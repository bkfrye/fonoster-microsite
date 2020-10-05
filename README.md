# Fonoster Microsite

Fonoster’s mission is to bring together businesses, developers, and asset providers in a way that allows everyone to win.

## Project setup

- This project is wrapped with [GatsbyJS](https://www.gatsbyjs.org/) using [React](https://reactjs.org/).
- Yarn is used for package management. If NPM is preferred, please delete the `yarn.lock` file before installing with NPM.


## Development

Recommended: minimum of `node v12.13.0`

`yarn develop` - starts development process (configured for automatic HTTPS support)

`.env` files are not used for any development process

Component styles are included with CSS-in-JS using [Emotion](https://emotion.sh/docs/introduction) outside of the global css found in `layout.css` and `fonts.css`.


## Building the project

`yarn build` - this will build the project as a static site

If the site is not hosted on the root of the domain, you will need to include a `path_prefix` for Gatsby to route pages properly and add to the build process.

You can do this by adding the prefix in the `gatsby-config.js` file.

```
...
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
  ],
  path_prefix: `/path/goes/here`
}
```
And then updating the `package.json` build process to be `"build": "gatsby build --prefix-paths",`

You can see [Gatsbys documentation](https://www.gatsbyjs.com/docs/path-prefix/) on path prefixes if needed.


## Template information

**To Update Content**

1. Add content to `content.json` in the `/content` directory following the format provided.

1. Include SVG sprite in SVG folder. Original SVG files are maintained here but not used. You can use a [free online generator](https://svgsprit.es/) to quickly produce the SVG sprite.

1. Include image assets in `/images` directory
  - Maintain filenames to prevent from having to manually update the image imports within components
  - Images should be `.jpg` and optimized for web

1. Static assets like fonts, downloads, favicon, etc... should be stored in the `/static` folder.


## Deploying to a server
This repo is set to automatically deploy to [fonoster-microsite.vercel.app](fonoster-microsite.vercel.app) when code is pushed to the `master` branch with [Vercel](https://vercel.com/).

If you would like to manually add this project to a server, the contents of the `/public` directory should be copied over. If the entire public directory is copied over instead of only the contents of said director, it will live at www.domain.com/public.