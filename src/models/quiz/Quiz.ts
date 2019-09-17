export default class Quiz {
    
    public id?: number;
    public title: string;

    constructor(quiz: Quiz){
        const {id, title } = quiz;
        this.id = id;
        this.title = title
    }
}