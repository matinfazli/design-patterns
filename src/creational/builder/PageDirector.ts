import {PageBuilder} from "./PageBuilder";
import {Page} from "./Page";

export class PageDirector {

    private pageBuilder: PageBuilder;

    constructor(builder: PageBuilder) {
        this.pageBuilder = builder;
    }

    getPage(): Page {
        return this.pageBuilder.getPage();
    }

    buildPage(): void {
        this.pageBuilder.createPage();
        this.pageBuilder.setPageStart();
        this.pageBuilder.setTitle('page_title');
        this.pageBuilder.setBodyStart();
        this.pageBuilder.setHeading('heading_text');
        this.pageBuilder.setText('some_text');
        this.pageBuilder.setBodyEnd();
        this.pageBuilder.setPageEnd();
        this.pageBuilder.formatPage();
    }
}
