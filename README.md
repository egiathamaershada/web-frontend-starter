# What is this and What is this not
This is an opinionated website frontend starter using Webpack, PostCSS, and Babel. This is not a fully packaged boilerplate or starter like create-react-app.

# Why
There are times when I wanted to try something. It can be with a CSS library, javascript library, or just an idea. Sometime it use ES6, SCSS, SASS, etc. Sometime I have to start from the ground building a project. With this I can __start somewhere in the 'early' process__ of building the project. This project will give you some kind of starting point with Babel, PostCSS, and image compression already available. You can always add more tools like babel-react, postcss-scss, or jest if you need them.

# How to use
## First
clone this repository using
~~~
git clone 
~~~
or clone any branch in this repository
~~~
git clone --single-branch -b cypress
~~~
## Then
install the requirements using
~~~
npm install
~~~
or if you are using yarn
~~~
yarn install
~~~
## Now
you can try using
~~~
npm run serve
~~~
or if you are using yarn
~~~
yarn serve
~~~
## Last
but not least, always read the documentation for all plugins and tools. And you can always add any plugins or any tools and configure it to suit your need. Something you wanted to see maybe __babel.config.js__ and __postcss.config.js__ to add presets, plugins and browser targets and image compression presets at __webpack.config.js__.

# Documentation
## Folder Structure
This is by no mean a good project structure, but having anything structured is always make things easier.
- __root__ contains project configs
  - __src__ contains your codes
  - __img__ contains your images
  - __dist__ contains distributable files __generated__ by webpack

## Scripts
By default, there are 3 scripts, __serve__, __build__, __test__. 

- __serve__ is for development use. It will launch webpack-dev-server for the project. You will have to visit the page in your browser (you can change this behaviour in __webpack.config.js__)
- __build__ is for production use. It will run webpack using production configuration.
- __test__ is for testing. By default, this project has no test implemented. I left the test open to be implemented by any testing framework you use. __There is a branch with test available using [cypress]("https://cypress.io")__

# License

[BSD 2 Clause]()