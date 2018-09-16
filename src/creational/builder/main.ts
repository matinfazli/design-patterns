import {PageBuilder} from "./PageBuilder";
import {HTMLPageBuilder} from "./HTMLPageBuilder";
import {JSONPageBuilder} from "./JSONPageBuilder";
import {PageDirector} from "./PageDirector";
import {Page} from "./Page";

export class Main {

    private pageDirector: PageDirector;

    constructor() {
        console.log('The html built version of the page is:');
        const htmlPageBuilder: PageBuilder = new HTMLPageBuilder();
        const htmlPage: Page = this.buildPage(htmlPageBuilder);
        console.log(htmlPage.show());

        console.log('The json built version of the page is:');
        const jsonPageBuilder: PageBuilder = new JSONPageBuilder();
        this.buildPage(jsonPageBuilder);
        const jsonPage: Page = this.buildPage(jsonPageBuilder);
        console.log(jsonPage.show());
    }

    buildPage(pageBuilder: PageBuilder): Page {
        this.pageDirector = new PageDirector(pageBuilder);
        this.pageDirector.buildPage();
        return this.pageDirector.getPage();
    }

}

new Main();
