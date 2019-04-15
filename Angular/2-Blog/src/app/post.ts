export class Post {
    Title : string;
    CreatedAt : Date;
    Content : string;
    LoveIts : number;

    constructor(title:string, content:string, loveits:number){
        this.Title = title;
        this.Content = content;
        this.LoveIts = loveits;
        this.CreatedAt = new Date();
    }
}

