import {ExtensionAPI} from "./ExtensionAPI";

export class FirefoxExtensionAPI implements ExtensionAPI {

    sendMessage(message: string): void {
        console.log('[FirefoxExtensionAPI] sending message:', message);
    }

}
