import {Resource} from "./Resource";
import {Artist} from "../models/Artist";

export class ArtistResource implements Resource {

    private artist: Artist;

    constructor(artist: Artist) {
        this.artist = artist;
    }

    get details(): string {
        return this.artist.bio;
    }

    get title(): string {
        return this.artist.name;
    }

    get url(): string {
        return this.artist.website;
    }

}
