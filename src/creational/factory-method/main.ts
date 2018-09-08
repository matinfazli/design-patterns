import {ExtensionAPI} from "./extension-apis/ExtensionAPI";
import {ExtensionAPIFactory} from "./extension-apis/ExtensionAPIFactory";

export class Main {

    private extension: ExtensionAPI;

    constructor() {
        this.extension = ExtensionAPIFactory.createExtensionAPI();
        this.sendHelloFromExtension(this.extension);
    }

    sendHelloFromExtension(extension: ExtensionAPI): void {
        extension.sendMessage('Hello there!');
    }

}

new Main();
