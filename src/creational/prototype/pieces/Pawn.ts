import {ChessPiece} from "./ChessPiece";

export class Pawn implements ChessPiece {

    private static readonly NAME: string = 'Pawn';
    private _isDead: boolean = false;

    get isDead(): boolean {
        return this._isDead;
    }

    set isDead(value: boolean) {
        this._isDead = value;
    }

    constructor() {
        console.log(`[ChessPiece] ${Pawn.NAME} constructed!`);
    }

    clone(): ChessPiece {
        console.log(`[ChessPiece] ${Pawn.NAME} cloned!`);
        return Object.assign(Object.create(this), this);
    }

}
