import {ChessPiece} from "./ChessPiece";

export class Queen implements ChessPiece {

    private static readonly NAME: string = 'Queen';
    private _isDead: boolean = false;

    get isDead(): boolean {
        return this._isDead;
    }

    set isDead(value: boolean) {
        this._isDead = value;
    }

    constructor() {
        console.log(`[ChessPiece] ${Queen.NAME} constructed!`);
    }

    clone(): ChessPiece {
        console.log(`[ChessPiece] ${Queen.NAME} cloned!`);
        return Object.assign(Object.create(this), this);
    }

}
