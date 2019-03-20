
## react-npm-starter
    simplely use create-react-app to build npm library,we save webpack.config.js in config fold,and modify it with webpack.lib.js.if create-react-app updated,we only need to read webpack.config.js,and modify in webpack.lib.js
    demo app created by create-react-app,npm start worked
    we only change "npm build" to "npm build:web"


## install webpack-cli and fork-ts-checker-webpack-plugin-alt
call npm install --save-dev webpack-cli 
call npm install --save-dev fork-ts-checker-webpack-plugin-alt
[2019.3.20]we should install it so create-react-app could work

## make npm packages with create-react-app
1. npm run build
  build the library at react-npm-starter fold in src
1. npm run go
  publish the library to npm
1. npm run copy
  copy the build result to node_modules,so we could import some thing from 'react-npm-starter'
  and the app.js could work

## demo app
src/index as entry point,it's the demo app
we could use some scripts like create-react-app
1. npm start
  start demo app in development mode
1. npm run build:web
  build the demo app which start from src/index.js in production mode.

## test for library and demo app
1. npm run test

## visual studio code 
1. at debug view,run "start" will debug demo app
  we must run npm start first,and could use ctrl+shift+B to run it
1. at debug view,run "test" will debug test