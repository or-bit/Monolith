class User {
    constructor(username, role) {
        this.userName = username;
        this.userRole = role;
    }

    get role() {
        return this.userRole;
    }

    get username() {
        return this.userName;
    }
}

module.exports = User;
