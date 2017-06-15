const questions = (() => {
    const routeQuestion = {
        type: 'input',
        name: 'route',
        message: 'What is the endpoint of the route? (example: \'admin\')',
    };

    const commandQuestion = {
        type: 'input',
        name: 'command',
        message: `What character sequence do you want to 
        assign to this route? (example '$admin')`,
    };

    const defineUserQuestion = {
        type: 'confirm',
        name: 'defineUser',
        message: 'Do you want to assign the command to specific users?',
    };

    const userRegexQuestion = {
        type: 'input',
        name: 'user',
        message: 'Enter user\'s matching regex',
        when: answers => answers.defineUser,
    };

    const operandTypeQuestion = {
        type: 'list',
        name: 'operandType',
        message: 'Enter operand type',
        choices: ['Equals', 'Like'],
        when: answers => answers.defineUser,
    };

    const addRouteQuestion = {
        type: 'confirm',
        name: 'otherRoutes',
        message: 'Do you want to add other routes?',
    };

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
        operandTypeQuestion,
        addRouteQuestion,
        pathQuestion,
        allQuestions: [
            routeQuestion,
            commandQuestion,
            defineUserQuestion,
            userRegexQuestion,
            operandTypeQuestion,
            addRouteQuestion,
        ],
    };
})();

module.exports = questions;
