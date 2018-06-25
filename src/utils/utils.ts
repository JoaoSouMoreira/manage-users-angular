import { User } from "../models/user.model";

export class Utils {
    static getEmptyUser(): User {
        return {
            id: 0,
            name: '',
            username: '',
            address: {
                city: '',
                street: '',
                suite: '',
                zipcode: '',
                geo: {
                    lat: '',
                    lng: '',
                }
            },
            company: {
                bs: '',
                catchPhrase: '',
                name: '',
            },
            email: '',
            phone: '',
            website: '',
        };
    }
}