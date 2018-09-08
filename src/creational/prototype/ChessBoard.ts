import {ChessPiece} from "./pieces/ChessPiece";
import {King} from "./pieces/King";
import {Queen} from "./pieces/Queen";
import {Rook} from "./pieces/Rook";
import {Bishop} from "./pieces/Bishop";
import {Knight} from "./pieces/Knight";
import {Pawn} from "./pieces/Pawn";

export class ChessBoard {

    pieces: ChessPiece[];

    constructor() {
        this.pieces = [
            new Rook(), new Bishop(), new Knight(), new Queen(), new King(), new Knight(), new Bishop(), new Rook(),
            new Pawn(), new Pawn(), new Pawn(), new Pawn(), new Pawn(), new Pawn(), new Pawn(), new Pawn(),
            new Pawn(), new Pawn(), new Pawn(), new Pawn(), new Pawn(), new Pawn(), new Pawn(), new Pawn(),
            new Rook(), new Bishop(), new Knight(), new Queen(), new King(), new Knight(), new Bishop(), new Rook()
        ];
    }

    clone(): ChessBoard {
        const clonedBoard: ChessBoard = Object.assign(Object.create(this), this);
        clonedBoard.pieces = this.pieces.map((piece) => piece.clone());
        return clonedBoard;
    }

    countAlivePieces(): number {
        return this.pieces.filter((piece) => piece.isDead === false).length;
    }

}
