import {ChessBoard} from "./ChessBoard";

export class Main {

    private originalChessBoard: ChessBoard;
    private clonedChessBoard: ChessBoard;

    constructor() {
        this.originalChessBoard = new ChessBoard();
        this.clonedChessBoard = this.originalChessBoard.clone();

        console.log('original board alive count: ', this.originalChessBoard.countAlivePieces());
        console.log('cloned board alive count: ', this.clonedChessBoard.countAlivePieces());

        this.originalChessBoard.pieces[0].isDead = true;
        this.originalChessBoard.pieces[1].isDead = true;
        console.log('2 pieces died on the original board');

        console.log('original board alive count: ',this.originalChessBoard.countAlivePieces());
        console.log('cloned board alive count: ', this.clonedChessBoard.countAlivePieces());
    }

}

new Main();
