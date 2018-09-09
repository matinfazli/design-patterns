import {Resource} from "./Resource";
import {Album} from "../models/Album";

export class AlbumResource implements Resource {

    private album: Album;

    constructor(album: Album) {
        this.album = album;
    }

    get details(): string {
        return this.album.description;
    }

    get title(): string {
        return this.album.title;
    }

    get url(): string {
        return this.album.itunesLink;
    }

}
