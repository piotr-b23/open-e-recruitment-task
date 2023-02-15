export class DisplayImage {
    public title: string;
    public url: string;
    public clickCounter: number = 0;


    constructor(title: string, url: string) {
        this.title = title;
        this.url = url;
    }


}