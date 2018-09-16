import {PageBuilder} from "./PageBuilder";
import {Page} from "../models/Page";

export class JSONPageBuilder implements PageBuilder {

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
        this.page.pageStart = `{"page":{`;
    }

    setPageEnd(): void {
        this.page.pageEnd = `}}`;
    }

    setBodyStart(): void {
        this.page.bodyStart = `"body":{`;
    }

    setBodyEnd(): void {
        this.page.bodyEnd = `}`;
    }

    setTitle(title: string): void {
        this.page.title = `"head":{"title":"${title}"},`
    }

    setHeading(heading: string): void {
        this.page.heading = `"heading":"${heading}",`;
    }

    setText(text: string): void {
        this.page.text = `"text":"${text}"`;
    }

}
