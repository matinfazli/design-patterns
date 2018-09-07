import {DatabaseFactory} from "./DatabaseFactory";
import {Sequence} from "../sequences/Sequence";
import {Table} from "../tables/Table";
import {PostgreSQLSequence} from "../sequences/PostgreSQLSequence";
import {PostgreSQLTable} from "../tables/PostgreSQLTable";

export class PostgreSQLDatabaseFactory implements DatabaseFactory {

    constructor() {
        console.log(`[Database Factory] new database created: PostgreSQL`);
    }

    createSequence(name: string): Sequence {
        return new PostgreSQLSequence(name);
    }

    createTable(name: string): Table {
        return new PostgreSQLTable(name);
    }

}
