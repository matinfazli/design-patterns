import {Table} from "./Table";

export class PostgreSQLTable implements Table {

    private name: string;
    private columns: string[];

    constructor(name: string) {
        this.name = name;
        this.columns = [];
        console.log(`[PostgreSQL] new table created: ${name}`);
    }

    createColumn(name: string): void {
        this.columns.push(name);
        console.log(`[PostgreSQL] added new "${name}" column to the table ${this.name}`);
    }

}
