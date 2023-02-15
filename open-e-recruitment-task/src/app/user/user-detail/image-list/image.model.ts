export class Image {
    public albumID: number;
    public id: number;
    public title: string;
    public url: string;
    public thumbnailUrl: string;

    constructor(albumID: number, id: number, title: string, url: string, thumbnailUrl: string) {

        this.albumID = albumID;
        this.id = id;
        this.title = title;
        this.url = url;
        this.thumbnailUrl = thumbnailUrl;

    }


}