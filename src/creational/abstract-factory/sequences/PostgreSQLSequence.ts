import {Sequence} from "./Sequence";

export class PostgreSQLSequence implements Sequence {

    private name: string;
    private minValue: number;

    constructor(name: string) {
        this.name = name;
        console.log(`[PostgreSQL] new sequence created: ${this.name}`);
    }

    setMinValue(value: number): void {
        this.minValue = value;
        console.log(`[PostgreSQL] new min value set: ${this.minValue}`);
    }

}
