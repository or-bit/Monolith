/**
 * Defines class user.
 * @class
 * @property {string} username - the user's username
 * @property {string} role - the user's role
 */
class User {
    /**
     * Create an user using username and role.
     * @param username {string} - the string representing the user's username
     * @param role {string} the string representing the user's role
     */
    constructor(username, role) {
        this.userName = username;
        this.userRole = role;
    }

    /**
     * Get user's role.
     * @returns {role}
     */
    get role() {
        return this.userRole;
    }

    /**
     * Get user's role.
     * @returns {username}
     */
    get username() {
        return this.userName;
    }
}

module.exports = User;
