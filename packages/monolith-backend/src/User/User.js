/**
 * @class User - Defines class user.
 * @property {string} username
 * @property {string} role
 */
class User {
    /**
     * Create an user using username and role.
     * @param username
     * @param role
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
