import {ExtensionAPI} from "./ExtensionAPI";
import {ChromeExtensionAPI} from "./ChromeExtensionAPI";
import {FirefoxExtensionAPI} from "./FirefoxExtensionAPI";

export class ExtensionAPIFactory {

    private static detectBrowser(): string {
        const random: number = Math.floor(Math.random() * (3)) + 1;
        return random === 1 ? 'chrome' : 'firefox';
    }

    static createExtensionAPI(): ExtensionAPI {
        switch (ExtensionAPIFactory.detectBrowser()) {
            case 'chrome':
                console.log('[ExtensionAPIFactory] Browser is Chrome');
                return new ChromeExtensionAPI();
            case 'firefox':
                console.log('[ExtensionAPIFactory] Browser is Firefox');
                return new FirefoxExtensionAPI();
        }

        return null;
    }

}
