export default class User {
  public id?: number;
  public name: string;
  public email: string;
  public password: string;

  constructor(user: User) {
    const { id, name, email, password } = user;
    this.id = id;
    this.name = name;
    this.email = email;
    this.password = password;
  }
}
