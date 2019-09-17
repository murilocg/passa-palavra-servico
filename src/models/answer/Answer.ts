export default class Answer {
    
    public id?: number;
    public questionId: number;
    public text: string;

    constructor(answer: Answer){
        const {id, questionId, text } = answer;
        this.id = id;
        this.questionId = questionId;
        this.text = text;
    }
}