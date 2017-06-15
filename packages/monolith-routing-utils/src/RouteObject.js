class RouteObject {
    constructor({ user, command, operandType, route }) {
        this.user = user;
        this.command = command;
        this.route = route;
    }

    getUser() {
        return this.user;
    }

    getCommand() {
        return this.command;
    }

    getRoute() {
        return this.route;
    }

    serialize(previousSpaces) {
        const getSpaces = previousSpaces || '';
        const output = [
            `${getSpaces}"${this.command}": {`,
            `${getSpaces}  "user": "${this.user}",`,
            `${getSpaces}  "route": "${this.route}",`,
            `${getSpaces}}`,
        ].join('\n');
        return output;
    }
}

module.exports = RouteObject;
