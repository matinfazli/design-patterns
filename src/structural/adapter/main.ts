import {User} from "./models/User";
import {ApiV1User} from "./models/ApiV1User";
import {ApiV2User} from "./models/ApiV2User";

class Main {

    constructor() {
        this.getUserApiV1((response) => {
            const user: User = new ApiV1User(response);
            console.log('api v1 user adapted to our desired version -> api response:', response, 'adapted version', user);
        });

        this.getUserApiV2((response) => {
            const user: User = new ApiV2User(response);
            console.log('api v2 user adapted to our desired version -> api response:', response, 'adapted version', user);
        });
    }

    getUserApiV1(callback: (response) => void): void {
        setTimeout(() => {
            callback({
                name: 'John',
                user_position: 'engineer',
                is_admin: 1
            });
        }, 100);
    }

    getUserApiV2(callback: (response) => void): void {
        setTimeout(() => {
            callback({
                name: 'John',
                position: 'engineer',
                isAdmin: true
            });
        }, 100);
    }

}

new Main();
