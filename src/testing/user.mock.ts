import { User } from "../models/user.model";

export const getUser1 = (): User => {
    return {
        id: 1,
        name: 'Test',
        username: 'testuser',
        address: {
            city: 'Test City',
            street: 'Test Street',
            suite: 'Test Suite',
            zipcode: '1234Test',
            geo: {
                lat: '0',
                lng: '0',
            }
        },
        company: {
            bs: 'Test BS',
            catchPhrase: 'Test catch phrase',
            name: 'Test Company',
        },
        email: 'test@test.com',
        phone: '123456789',
        website: 'http://test.com',
    }
}

export const getUpdatedUser1 = (): User => {
    return {
        ...getUser2(),
        id: 1
    }
}

export const getUser2 = (): User => {
    return {
        id: 2,
        name: 'Test2',
        username: 'testuser2',
        address: {
            city: 'Test City2',
            street: 'Test Street2',
            suite: 'Test Suite2',
            zipcode: '1234Test2',
            geo: {
                lat: '2',
                lng: '2',
            }
        },
        company: {
            bs: 'Test BS2',
            catchPhrase: 'Test catch phrase 2',
            name: 'Test Company 2',
        },
        email: 'test2@test2.com',
        phone: '987654321',
        website: 'http://test2.com',
    }
}