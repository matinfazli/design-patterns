import {Table} from "./Table";

export class MySQLTable implements Table {

    private name: string;
    private columns: string[];

    constructor(name: string) {
        this.name = name;
        this.columns = [];
        console.log(`[MySQL] new table created: ${name}`);
    }

    createColumn(name: string): void {
        this.columns.push(name);
        console.log(`[MySQL] added new "${name}" column to the table ${this.name}`);
    }

}
