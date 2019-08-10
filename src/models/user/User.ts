export default class User {
    public id: number;
    public name: string;
    public surname: string;


    constructor(user: User){
        const {id, name, surname} = user;
        this.id = id;
        this.name = name;
        this.surname = surname;
    }

}