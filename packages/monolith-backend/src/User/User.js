/**
 * Defines class user.
 * @class
 * @property {string} username
 * @property {string} role
 */
class User {
    /**
     * Create an user using username and role.
     * @param username {string}
     * @param role {string}
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
