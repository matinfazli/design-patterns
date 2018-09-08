import {ChessPiece} from "./ChessPiece";

export class Knight implements ChessPiece {

    private static readonly NAME: string = 'Knight';
    private _isDead: boolean = false;

    get isDead(): boolean {
        return this._isDead;
    }

    set isDead(value: boolean) {
        this._isDead = value;
    }

    constructor() {
        console.log(`[ChessPiece] ${Knight.NAME} constructed!`);
    }

    clone(): ChessPiece {
        console.log(`[ChessPiece] ${Knight.NAME} cloned!`);
        return Object.assign(Object.create(this), this);
    }

}
