import {ChessPiece} from "./ChessPiece";

export class Rook implements ChessPiece {

    private static readonly NAME: string = 'Rook';
    private _isDead: boolean = false;

    get isDead(): boolean {
        return this._isDead;
    }

    set isDead(value: boolean) {
        this._isDead = value;
    }

    constructor() {
        console.log(`[ChessPiece] ${Rook.NAME} constructed!`);
    }

    clone(): ChessPiece {
        console.log(`[ChessPiece] ${Rook.NAME} cloned!`);
        return Object.assign(Object.create(this), this);
    }

}
