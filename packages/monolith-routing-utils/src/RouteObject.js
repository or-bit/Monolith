/**
 * @class RouteObject - Class that manage routing relative to user.
 * @property {string} user
 * @property {string} command
 * @property {string} route
 */
class RouteObject {
    /**
     * Create route object.
     * @param user
     * @param command
     * @param route
     */
    constructor({ user, command, route }) {
        this.user = user;
        this.command = command;
        this.route = route;
    }

    /**
     * Returns user.
     * @returns {user}
     */
    getUser() {
        return this.user;
    }

    /**
     * Returns command
     * @returns {command}
     */
    getCommand() {
        return this.command;
    }

    /**
     * Returns route.
     * @returns {route}
     */
    getRoute() {
        return this.route;
    }

    /**
     * Transform route object in string.
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
