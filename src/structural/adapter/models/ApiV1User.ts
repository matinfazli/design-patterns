import {User} from "./User";

export class ApiV1User implements User {

    name: string;
    position: string;
    isAdmin: boolean;

    constructor(data: { name: string, user_position: string, is_admin: number }) {
        this.name = data.name;
        this.position = data.user_position;
        this.isAdmin = data.is_admin === 1;
    }

}
