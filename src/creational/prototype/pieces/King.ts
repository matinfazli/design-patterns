import {ChessPiece} from "./ChessPiece";

export class King implements ChessPiece {

    private static readonly NAME: string = 'King';
    private _isDead: boolean = false;

    get isDead(): boolean {
        return this._isDead;
    }

    set isDead(value: boolean) {
        this._isDead = value;
    }

    constructor() {
        console.log(`[ChessPiece] ${King.NAME} constructed!`);
    }

    clone(): ChessPiece {
        console.log(`[ChessPiece] ${King.NAME} cloned!`);
        return Object.assign(Object.create(this), this);
    }

}
