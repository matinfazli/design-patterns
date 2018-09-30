export interface TextParser {
    getCharacterCount(): number;
    getCharacterCountOfType(char: string): number;
}
