import { of } from 'rxjs';

import { getUser1 } from './user.mock';
import { UserDataService } from "../providers/user.data";
import { UserState } from '../reducers/user.reducer';


export class UserDataServiceMock {

    public static instance() {
        let instance: jasmine.SpyObj<UserDataService> = jasmine.createSpyObj('UserDataService', [
            'store',
            'fetchUsers',
            'addUser',
            'updateUser',
            'deleteUser',
        ]
        );
        const state: UserState = {
            users: [getUser1()],
            nextId: 2,
            isLoaded: true
        }
        instance.store.and.returnValue(of(state));
        return instance;
    }

}