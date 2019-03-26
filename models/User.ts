export default class User {

    private firstname: string;
    private lastname: string;

    constructor(firstname: string, lastname: string) {
        this.firstname = firstname;
        this.lastname  = lastname;
    }

    getDetails(): string {
        return this.firstname + ' ' + this.lastname;
    }
}