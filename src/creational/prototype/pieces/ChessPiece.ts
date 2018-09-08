export interface ChessPiece {
    isDead: boolean;
    clone(): ChessPiece;
}
