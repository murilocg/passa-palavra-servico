export default class Question {
    
    public id?: number;
    public text: string;
    public letter: string;
    public quizId: number;

    constructor(question: Question){
        const {id, text, letter,quizId } = question;
        this.id = id;
        this.text = text;
        this.letter = letter;
        this.quizId = quizId
    }

}