/**
 * @class Class that manages routing relative to user.
 * @property user {User}
 * @property command {string}
 * @property route {string}
 */
class RouteObject {
    /**
     * Create route object.
     * @param user {User}
     * @param command {string}
     * @param route {string}
     */
    constructor({ user, command, route }) {
        this.user = user;
        this.command = command;
        this.route = route;
    }

    /**
     * Returns user.
     * @returns {User}
     */
    getUser() {
        return this.user;
    }

    /**
     * Returns command
     * @returns {string}
     */
    getCommand() {
        return this.command;
    }

    /**
     * Returns route.
     * @returns {string}
     */
    getRoute() {
        return this.route;
    }

    /**
     * Transform route object in a string.
     * @param previousSpaces
     * @returns {string}
     */
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
