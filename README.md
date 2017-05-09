# monolith

This is the [monorepo](<https://github.com/babel/babel/blob/master/doc/design/monorepo.md>) of the monolith framework developed by Or-Bit for the didactic-side of the Software Engineering course. For more info, check out the [institutional link](<http://www.math.unipd.it/~tullio/IS-1/2016/>).

## Contributing
0.  Install Node JS (TODO other deps)
1.  Clone this repo
2.  `npm i`
3.  `npm run bootstrap`
4.  `npm test`

### Project's commands


## Packages
The following paragraphs present the list of submodules that compose the framework.
### builder

### monolith-api

### monolith-api-controller

### monolith-api-model

### monolith-api-view

### monolith-bubble-examples???


## Dependencies
Dependency management is handled by npm. Using [lerna](<https://github.com/lerna/lerna>) to split codebase into smaller npm modules we are able to share the common dependencies, resulting into:
1.   faster starting operations
2.   smaller memory footprint
3.   version consistency between submodules

### common
dependencies  
**lerna**: make lerna a local project dependency to use it in project-wide scripts

**babel-cli**:  
**babel-preset-es2015**:  
**chai**:  
**chai-as-promised**:  
**eslint**:  
**eslint-config-airbnb**:  
**eslint-plugin-import**:  
**eslint-plugin-jsx-a11y**:  
**eslint-plugin-react**:  
**gulp**:  
**gulp-babel**:  
**json-loader**: needed for now (https://github.com/facebookincubator/create-react-app/issues/1895)



This README would normally document whatever steps are necessary to get your application up and running.

### What is this repository for? ###

* Quick summary
* Version
* [Learn Markdown](https://bitbucket.org/tutorials/markdowndemo)

### How do I get set up? ###

* Summary of set up
* Configuration
* Dependencies
* Database configuration
* How to run tests
* Deployment instructions

### Contribution guidelines ###

* Writing tests
* Code review
* Other guidelines

### Who do I talk to? ###

* Repo owner or admin
* Other community or team contact
