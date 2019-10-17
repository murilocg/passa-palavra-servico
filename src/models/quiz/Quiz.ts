export default class Quiz {
  public id?: number;
  public title: string;
  public userId: number;

  constructor(quiz: Quiz) {
    const { id, title, userId } = quiz;
    this.id = id;
    this.title = title;
    this.userId = userId;
  }
}
