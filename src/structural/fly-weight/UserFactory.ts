import {User} from "./User";

export class UserFactory {

    private readonly users: {[name: string]: User};

    constructor() {
        this.users = {};
    }

    getOrCreateUser(name: string): User {
        if (!this.users[name]) {
            console.log('new user object constructed', 'name:', name);
            this.users[name] = new User(name);
        } else {
            console.log('user object already exists, returning', 'name:', name);
        }

        return this.users[name];
    }
}
