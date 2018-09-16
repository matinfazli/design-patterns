export class Page {

    private _page: string;
    private _pageStart: string;
    private _title: string;
    private _bodyStart: string;
    private _heading: string;
    private _text: string;
    private _bodyEnd: string;
    private _pageEnd: string;

    set pageStart(value: string) {
        this._pageStart = value;
    }

    set pageEnd(value: string) {
        this._pageEnd = value;
    }

    set bodyStart(value: string) {
        this._bodyStart = value;
    }

    set bodyEnd(value: string) {
        this._bodyEnd = value;
    }

    set title(value: string) {
        this._title = value;
    }

    set heading(value: string) {
        this._heading = value;
    }

    set text(value: string) {
        this._text = value;
    }

    format(): void {
        this._page = `${this._pageStart}`;
        this._page += `${this._title}`;
        this._page += `${this._bodyStart}`;
        this._page += `${this._heading}`;
        this._page += `${this._text}`;
        this._page += `${this._bodyEnd}`;
        this._page += `${this._pageEnd}`;
    }

    show(): string {
        return this._page;
    }

}
