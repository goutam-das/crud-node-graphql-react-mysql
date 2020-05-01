# crud-node-graphql-react-mysql

## Setup node express server using babel

You can install it from the command line for your project's development dependencies.

```
npm install @babel/core @babel/node --save-dev
```

Change package.json file

```
{
  ...
  "main": "index.js",
  "scripts": {
    "start": "nodemon --exec babel-node src/index.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  ...
}
```

Let's add the most common used Babel preset to your application:

```
npm install @babel/preset-env --save-dev
```

Now, in the project's root folder, create a .babelrc file in the command line:

```
touch .babelrc
```

In this configuration file for Babel, you can include the recently installed dependency for unlocking the upcoming JavaScript language features.
```
{
  "presets": [
    "@babel/preset-env"
  ]
}
```

## How to setup Express.js in Node.js

```
npm install express
```

Now, in your server.js file, use the following code to import Express.js, to create an instance of an Express application, and to start it as Express server:

```
import express from 'express';
 
const app = express();
 
app.listen(3000, () =>
  console.log('Example app listening on port 3000!'),
);
```

https://www.robinwieruch.de/graphql-apollo-server-tutorial

# Task List

- [x] Setup node with babel
- [ ] Setup graphQL with apollo-server-express