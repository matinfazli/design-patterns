import {Table} from "../tables/Table";
import {Sequence} from "../sequences/Sequence";

export interface DatabaseFactory {
    createTable(name: string): Table;
    createSequence(name: string): Sequence;
}
