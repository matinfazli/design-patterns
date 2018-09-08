import {ChessPiece} from "./ChessPiece";

export class Bishop implements ChessPiece {

    private static readonly NAME: string = 'Bishop';
    private _isDead: boolean = false;

    get isDead(): boolean {
        return this._isDead;
    }

    set isDead(value: boolean) {
        this._isDead = value;
    }

    constructor() {
        console.log(`[ChessPiece] ${Bishop.NAME} constructed!`);
    }

    clone(): ChessPiece {
        console.log(`[ChessPiece] ${Bishop.NAME} cloned!`);
        return Object.assign(Object.create(this), this);
    }

}
