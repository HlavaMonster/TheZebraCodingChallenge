# The Zebra coding challenge for Dustin Hlava
[![generator-create-redux-app](https://img.shields.io/badge/built%20with-generator--create--redux--app-brightgreen.svg)](https://github.com/jonidelv/generator-create-redux-app)



## Considerations
-   This project was generated with Yeoman using the [Create Redux App](https://github.com/jonidelv/generator-create-redux-app) Generator
- Removed some unnecessary boilerplate
- Browsers tested: Chrome, Firefox, Safari. Autoprefixer css post-processing for prefix generation.

## Areas for improvement
- Eject Create-react-app for better control over webpack configuration and scripts
    - Worked within the contraints of the default configurations and did not eject for time limitations and to focus on challenge requirements
- Better solution for SVG loading
    - Had issues with importing svg's into the modules. I believe it has something to do with a webpack configuration. Could have been solved with ejecting and tweaking loaders
- Consider other methods to style components (styled-components, css modules, more component specific stylesheets)
- more thorough soring (sorting order, null/undefined ordering)
- refactor to reimplement redux for further scope expansion


## Running the page

### `npm start` or `yarn start`

Runs the app in development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will see the build errors and lint warnings in the console.

### `npm test` or `yarn test`

Runs the test watcher in an interactive mode.<br>
By default, runs tests related to files changes since the last commit.

### `npm run build` or `yarn build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

