import {User} from "./User";
import {UserFactory} from "./UserFactory";

class Main {

    constructor() {
        const userFactory: UserFactory = new UserFactory();

        console.log('Creating 2 new users, since they were not created they are going to be constructed');
        const Mathew: User = userFactory.getOrCreateUser('Mathew');
        console.log('Mathew', Mathew);
        const John: User = userFactory.getOrCreateUser('John');
        console.log('John', John);

        console.log('Creating 2 new users, since they were already created they we just get them back');
        console.log('Mathew', userFactory.getOrCreateUser('Mathew'));
        console.log('John', userFactory.getOrCreateUser('John'));
    }

}

new Main();
