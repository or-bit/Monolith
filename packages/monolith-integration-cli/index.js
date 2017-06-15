const inquirer = require('inquirer');
const chalk = require('chalk');
const routingUtils = require('monolith-routing-utils');
const questions = require('./src/Questions');
const configurationGenerator = require('./src/generator/ConfigGenerator');
const FileWriter = require('./src/files/FileWriter');

const { RouteObject, RoutesCollection } = routingUtils;

const welcome = 'Welcome to the ';
const monolithBrand = 'monolith bubbles';
const welcomeEnding = 'configuration command-line wizard';

const routesCollection = new RoutesCollection();

console.log(chalk.cyan(welcome),
  chalk.bold.underline.red(monolithBrand),
  chalk.cyan(welcomeEnding));

const promptFunction = () => (
    inquirer.prompt(questions.allQuestions).then((answers) => {
        if (answers.otherRoutes) {
            const routeObject = new RouteObject(answers);
            routesCollection.add(routeObject);
            return promptFunction();
        }
        routesCollection.add(new RouteObject(answers));
        return inquirer.prompt(questions.pathQuestion).then((answer) => {
            const path = `${answer.filePath}/routes.js`;
            configurationGenerator.generateAllCode(routesCollection)
                .then((data) => {
                    FileWriter.writeFile(path, data, console.log)
                        .then(() => {})
                        .catch((error) => {
                            routesCollection.clear();
                            throw new Error(error);
                        });
                }).catch((error) => {
                    routesCollection.clear();
                    throw new Error(error);
                });
        }).catch((error) => {
            throw new Error(error);
        });
    }).catch((error) => {
        throw new Error(error);
    })
);

promptFunction();
