import {User} from "./User";

export class ApiV2User implements User {

    name: string;
    position: string;
    isAdmin: boolean;

    constructor(data: { name: string, position: string, isAdmin: boolean }) {
        this.name = data.name;
        this.position = data.position;
        this.isAdmin = data.isAdmin;
    }

}
