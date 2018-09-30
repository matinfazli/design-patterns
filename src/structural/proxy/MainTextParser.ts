import {TextParser} from "./TextParser";

export class MainTextParser implements TextParser {

    private text: string[];

    constructor(text: string) {
        // doing some heavy duty text parsing to make the difference visible
        this.text = text.split('').join('').split('').join('').split('');
    }

    getCharacterCount(): number {
        return this.text.length;
    }

    getCharacterCountOfType(char: string): number {
        return this.text.reduce((prevValue, currValue) => {
            return prevValue + (currValue === char ? 1 : 0);
        }, 0);
    }

}
