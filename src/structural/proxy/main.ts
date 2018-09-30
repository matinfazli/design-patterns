import {TextParser} from "./TextParser";
import {MainTextParser} from "./MainTextParser";
import {LazyTextParser} from "./LazyTextParser";

class Main {

    private readonly randomString: string = 'Adieus except say barton put feebly favour him. Entreaties unpleasant' +
        ' sufficient few pianoforte discovered uncommonly ask. Morning cousins amongst in mr weather do neither. ' +
        'Warmth object matter course active law spring six. Pursuit showing tedious unknown winding see had man add.' +
        ' And park eyes too more him. Simple excuse active had son wholly coming number add. Though all excuse ' +
        'ladies rather regard assure yet. If feelings so prospect no as raptures quitting.';

    constructor() {
        // testing main parser
        console.log('Main parser (no proxy) creates expensive object on construct');

        console.time('[NO-PROXY] time for constructing parser');
        const mainTextParser: TextParser = new MainTextParser(this.randomString);
        console.timeEnd('[NO-PROXY] time for constructing parser');

        console.time('[NO-PROXY] time for running getCharacterCount and getCharacterCountOfType');
        mainTextParser.getCharacterCount();
        mainTextParser.getCharacterCountOfType('m');
        console.timeEnd('[NO-PROXY] time for running getCharacterCount and getCharacterCountOfType');


        // testing lazy parser
        console.log('Lazy parser (with proxy) creates expensive object on demand');

        console.time('[PROXY] time for constructing parser');
        const lazyTextParser: TextParser = new LazyTextParser(this.randomString);
        console.timeEnd('[PROXY] time for constructing parser');

        console.time('[PROXY] time for running getCharacterCount and getCharacterCountOfType');
        lazyTextParser.getCharacterCount();
        lazyTextParser.getCharacterCountOfType('m');
        console.timeEnd('[PROXY] time for running getCharacterCount and getCharacterCountOfType');
    }

}

new Main();
