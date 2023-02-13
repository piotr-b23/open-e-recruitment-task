export class User {
    public id: number;
    public name: string;
    public username: string;
    public email: string;
    public address: {
        street: string;
        suite: string;
        city: string;
        zipcode: string;
        geo: {
            lat: string;
            lng: string;
        }
    }
    public phone: string;
    public website: string;
    public company: {
        name: string;
        catchPhrase: string;
        bs: string;
    }


    constructor(id: number, name: string, username: string, email: string, address: {
        street: string;
        suite: string;
        city: string;
        zipcode: string;
        geo: {
            lat: string;
            lng: string;
        } 
    }, phone: string, website: string, company: {
        name: string;
        catchPhrase: string;
        bs: string;
    }) {

        this.id = id;
        this.name = name;
        this.username = username;
        this.email = email;
        this.address = address;
        this.phone = phone;
        this.website = website;
        this.company = company;

    }


}