import {TextParser} from "./TextParser";
import {MainTextParser} from "./MainTextParser";

export class LazyTextParser implements TextParser {

    private readonly text: string;
    private textParserInstance: TextParser;

    constructor(text: string) {
        this.text = text
    }

    private getInstanceOnDemand(): TextParser {
        if (!this.textParserInstance) {
            this.textParserInstance = new MainTextParser(this.text);
        }
        return this.textParserInstance;
    }

    getCharacterCount(): number {
        return this.getInstanceOnDemand().getCharacterCount();
    }

    getCharacterCountOfType(char: string): number {
        return this.getInstanceOnDemand().getCharacterCountOfType(char);
    }

}
