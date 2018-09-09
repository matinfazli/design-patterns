import {ArtistResource} from "./resources/ArtistResource";
import {AlbumResource} from "./resources/AlbumResource";
import {Resource} from "./resources/Resource";
import {Client} from "./Client";
import {Artist} from "./models/Artist";
import {Album} from "./models/Album";
import {ShortView} from "./views/ShortView";
import {LongView} from "./views/LongView";

class Main {

    private client: Client;

    constructor() {
        this.client = new Client();

        const pinkFloyd: Artist = new Artist();
        pinkFloyd.name = 'Pink Floyd';
        pinkFloyd.bio = 'Pink Floyd were an English rock band formed in London in 1965';
        pinkFloyd.website = 'http://www.pinkfloyd.com';

        const pinkFloydResource: ArtistResource = new ArtistResource(pinkFloyd);

        const pinkFloydAlbum: Album = new Album();
        pinkFloydAlbum.title = 'The Wall';
        pinkFloydAlbum.description = 'The Wall is the eleventh studio album by English rock band Pink Floyd';
        pinkFloydAlbum.itunesLink = 'https://itunes.apple.com/us/album/the-wall/1065975633';

        const pinkFloydAlbumResource: AlbumResource = new AlbumResource(pinkFloydAlbum);

        console.log('Short form view of pink floyd and album');
        this.showShortView(pinkFloydResource);
        this.showShortView(pinkFloydAlbumResource);

        console.log('Long form view of pink floyd and album');
        this.showLongView(pinkFloydResource);
        this.showLongView(pinkFloydAlbumResource);
    }

    showShortView(resource: Resource): void {
        this.client.viewBuilder = new ShortView(resource);
        this.client.showView();
    }

    showLongView(resource: Resource): void {
        this.client.viewBuilder = new LongView(resource);
        this.client.showView();
    }

}

new Main();
