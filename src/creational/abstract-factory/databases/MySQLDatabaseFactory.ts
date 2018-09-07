import {DatabaseFactory} from "./DatabaseFactory";
import {Sequence} from "../sequences/Sequence";
import {Table} from "../tables/Table";
import {MySQLSequence} from "../sequences/MySQLSequence";
import {MySQLTable} from "../tables/MySQLTable";

export class MySQLDatabaseFactory implements DatabaseFactory {

    constructor() {
        console.log(`[Database Factory] new database created: MySQL`);
    }

    createSequence(name: string): Sequence {
        return new MySQLSequence(name);
    }

    createTable(name: string): Table {
        return new MySQLTable(name);
    }

}
