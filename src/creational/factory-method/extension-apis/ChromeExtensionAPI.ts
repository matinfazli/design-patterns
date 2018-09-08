import {ExtensionAPI} from "./ExtensionAPI";

export class ChromeExtensionAPI implements ExtensionAPI {

    sendMessage(message: string): void {
        console.log('[ChromeExtensionAPI] sending message:', message);
    }

}
