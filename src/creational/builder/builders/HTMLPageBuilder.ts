import {PageBuilder} from "./PageBuilder";
import {Page} from "../models/Page";

export class HTMLPageBuilder implements PageBuilder {

    private page: Page;

    createPage(): void {
        this.page = new Page();
    }

    getPage(): Page {
        return this.page;
    }

    formatPage(): void {
        this.page.format();
    }

    setPageStart(): void {
        this.page.pageStart = `<html>`;
    }

    setPageEnd(): void {
        this.page.pageEnd = `</html>`;
    }

    setBodyStart(): void {
        this.page.bodyStart = `<body>`;
    }

    setBodyEnd(): void {
        this.page.bodyEnd = `</body>`;
    }

    setTitle(title: string): void {
        this.page.title = `<head><title>${title}</title></head>`
    }

    setHeading(heading: string): void {
        this.page.heading = `<h1>${heading}</h1>`;
    }

    setText(text: string): void {
        this.page.text = `<p>${text}</p>`;
    }

}
