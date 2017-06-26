# Monolith

This is the [monorepo](<https://github.com/babel/babel/blob/master/doc/design/monorepo.md>) of the monolith framework developed by Or-Bit for the didactic-side of the Software Engineering course. For more info, check out the [institutional link](<http://www.math.unipd.it/~tullio/IS-1/2016/>).

## Installing

1.  Clone this repository
2.  `npm i -S monolith-backend`
3.  `npm i -S monolith-frontend` 


## Packages
The following paragraphs present the list of submodules that compose the framework.
### builder
Source file compiler for pubblishing npm packages in ES5 formatting.

### monolith-backend
Contains all the useful classes for a bubble back-end. It comprehends the data persistence and bubble lifecycle functionalities, server and user objects, and some hepful functionalities such as external api retrieval, random id generator for a MongoDB database istance and regular expressions management. 

### monolith-frontend
Comprehends the classes used to create the gui and the notifications.  It consists of classes useful for creating a bubble front-end.

### Monolith-bubble-examples
#### monolith-hello-world
Simple bubble with monolith-frontend and monolith-backend.
It can be found at https://github.com/or-bit/monolith-hello-world .

#### monolith-todos
To-do bubble implemented with Monolith.
It can be found at https://github.com/or-bit/monolith-todos .

#### Bubble & eat
Bubble & eat is an app to manage restaurant services in a simple and fast way, just like writing a message on your favourite chat-app.
It can be found at https://github.com/or-bit/bubble-and-eat .


## Dependencies
Dependency management is handled by npm. Using [lerna](<https://github.com/lerna/lerna>) to split codebase into smaller npm modules we are able to share the common dependencies, resulting into:
1.   faster starting operations
2.   smaller memory footprint
3.   version consistency between submodules

### Common dependencies  

**lerna**: make lerna a local project dependency to use it in project-wide scripts.

**babel-cli**: built-in CLI which can be used to compile files from the command line.

**babel-preset-es2015**:  this preset is used to enable ES2015 code compilation down to ES5.

**chai**:  is a BDD / TDD assertion library for node and the browser that can be delightfully paired with any javascript testing framework.

**chai-as-promised**:  extends Chai with a fluent language for asserting facts about promises.

**eslint**:  is a tool for identifying and reporting on patterns found in ECMAScript/JavaScript code.

**eslint-config-airbnb**:  provides Airbnb's .eslintrc as an extensible shared config.

**eslint-plugin-import**:  this plugin intends to support linting of ES2015+ (ES6+) import/export syntax, and prevent issues with misspelling of file paths and import names. 

**eslint-plugin-jsx-a11y**: runtime-analysis tool, checks for accessibility rules on JSX elements.

**eslint-plugin-react**: get Eslint working  with React.js .

**gulp**:  gulp is a toolkit for automating painful or time-consuming tasks in the development workflow.

**gulp-babel**:  Gulp plugin for Babel.

**json-loader**: needed for now (https://github.com/facebookincubator/create-react-app/issues/1895)


### Lerna Markdown
* [Learn Markdown](https://bitbucket.org/tutorials/markdowndemo)


