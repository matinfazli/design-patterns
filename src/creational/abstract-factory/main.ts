import {DatabaseFactory} from "./databases/DatabaseFactory";
import {Table} from "./tables/Table";
import {Sequence} from "./sequences/Sequence";
import {MySQLDatabaseFactory} from "./databases/MySQLDatabaseFactory";
import {PostgreSQLDatabaseFactory} from "./databases/PostgreSQLDatabaseFactory";

export class Main {

    private readonly mysql: DatabaseFactory;
    private readonly postgresql: DatabaseFactory;

    constructor() {
        this.mysql = new MySQLDatabaseFactory();
        this.createPeopleTableAndSequence(this.mysql);

        this.postgresql = new PostgreSQLDatabaseFactory();
        this.createPeopleTableAndSequence(this.postgresql);
    }

    createPeopleTableAndSequence(database: DatabaseFactory): void {
        const peopleSequence: Sequence = database.createSequence('people_seq');
        peopleSequence.setMinValue(1);

        const peopleTable: Table = database.createTable('people');
        peopleTable.createColumn('id');
        peopleTable.createColumn('name');
    }
}

new Main();
