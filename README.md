# Starter code for test-driving a React app

## Project setup

```shell
npm init 
npm install react react-dom 
npm install @babel/plugin-transform-runtime
npm install @babel/runtime 
npm install --save-dev @babel/preset-env @babel/preset-react 
npm install --save-dev jest 
npm install --save-dev jest-environment-jsdom
```

## .babelrc file

```shell
{
    "presets": [
        "@babel/env",
        "@babel/react"
    ],
    "plugins": [
        "@babel/transform-runtime"
    ]
}
```

## jest.config.js file 

```shell
module.exports = {
    "testEnvironment": "jsdom"
}
```

Have fun!