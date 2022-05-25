 export class UserClass {
    firstName: string
    lastName: string
    email:string
    pass:string
    money:number
    constructor(firstName,lastName, email, password, money) {
        this.firstName = firstName;
        this.lastName = lastName
        this.email = email;
        this.pass = password;
        this.money = money;
    }
}