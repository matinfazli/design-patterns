import {Page} from "../models/Page";

export interface PageBuilder {
    createPage(): void;
    getPage(): Page;
    setPageStart(): void;
    setPageEnd(): void;
    setBodyStart(): void;
    setBodyEnd(): void;
    setHeading(heading: string): void;
    setTitle(title: string): void;
    setText(text: string): void;
    formatPage(): void;
}
