/**
 * Questions for the bubbles configuration.
 * @module Questions
 */
const questions = (() => {
    /**
     * @member routeQuestion
     * @type {{type: string, name: string, message: string}}
     */
    const routeQuestion = {
        type: 'input',
        name: 'route',
        message: 'What is the endpoint of the route? (example: \'admin\')',
    };

    /**
     * @member commandQuestion
     * @type {{type: string, name: string, message: string}}
     */
    const commandQuestion = {
        type: 'input',
        name: 'command',
        message: `What character sequence do you want to 
        assign to this route? (example '$admin')`,
    };

    /**
     * @member defineUserQuestion
     * @type {{type: string, name: string, message: string}}
     */
    const defineUserQuestion = {
        type: 'confirm',
        name: 'defineUser',
        message: 'Do you want to assign the command to specific users?',
    };

    /**
     * @member userRegexQuestion
     * @type {{type: string, name: string, message: string}}
     */
    const userRegexQuestion = {
        type: 'input',
        name: 'user',
        message: 'Enter user\'s matching regex',
        when: answers => answers.defineUser,
    };

    /**
     * @member addRouteQuestion
     * @type {{type: string, name: string, message: string}}
     */
    const addRouteQuestion = {
        type: 'confirm',
        name: 'otherRoutes',
        message: 'Do you want to add other routes?',
    };

    /**
     * @member pathQuestion
     * @type {{type: string, name: string, message: string}}
     */
    const pathQuestion = {
        type: 'string',
        name: 'filePath',
        message: 'Where do you want to save the file?',
    };

    return {
        routeQuestion,
        commandQuestion,
        defineUserQuestion,
        userRegexQuestion,
        addRouteQuestion,
        pathQuestion,
        allQuestions: [
            routeQuestion,
            commandQuestion,
            defineUserQuestion,
            userRegexQuestion,
            addRouteQuestion,
        ],
    };
})();

module.exports = questions;
