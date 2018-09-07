import {Sequence} from "./Sequence";

export class MySQLSequence implements Sequence {

    private name: string;
    private minValue: number;

    constructor(name: string) {
        this.name = name;
        console.log(`[MySQL] new sequence created: ${this.name}`);
    }

    setMinValue(value: number): void {
        this.minValue = value;
        console.log(`[MySQL] new min value set: ${this.minValue}`);
    }

}
