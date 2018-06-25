import { getUpdatedUser1, getUser1, getUser2 } from '../testing/user.mock';
import { AddAction, DeleteAction, FetchAction, UpdateAction, UserActionType } from '../providers/user.data';
import { userReducer, USER_INITIAL_STATE } from './user.reducer';

describe('User Reducer', () => {

    it('#setUsers should not insert anything if not provided with any users', () => {
        const action: FetchAction = { type: UserActionType.FETCH_ALL, payload: [] };
        const stateAfter = userReducer(USER_INITIAL_STATE, action);
        expect(stateAfter).toEqual({
            users: [],
            nextId: 1,
            isLoaded: true
        });
    });

    it('#setUsers should set a list of users to the state, nextId and isLoaded state to true', () => {
        const action: FetchAction = { type: UserActionType.FETCH_ALL, payload: [getUser1(), getUser2()] };
        const stateAfter = userReducer(USER_INITIAL_STATE, action);
        expect(stateAfter).toEqual({
            users: [getUser1(), getUser2()],
            nextId: 3,
            isLoaded: true
        });
    });

    it('#addUser should insert a new user to the user list', () => {
        const action: AddAction = { type: UserActionType.ADD, payload: getUser1() };
        const stateBefore = {
            users: [],
            nextId: 1,
            isLoaded: true
        };
        const stateAfter = userReducer(stateBefore, action);
        expect(stateAfter).toEqual({
            ...stateBefore,
            users: [getUser1()],
            nextId: 2,
        });
    });

    it('#deleteUser should remove a user from the list given the ID', () => {
        const action: DeleteAction = { type: UserActionType.DELETE, payload: 1 };
        const stateBefore = {
            users: [getUser1(), getUser2()],
            nextId: 3,
            isLoaded: true
        };
        const stateAfter = userReducer(stateBefore, action);
        expect(stateAfter).toEqual({
            ...stateBefore,
            users: [getUser2()],
            nextId: 3,
        });
    });

    it('#updateUser should update user with another user object', () => {
        const action: UpdateAction = { type: UserActionType.UPDATE, payload: getUpdatedUser1() };
        const stateBefore = {
            users: [getUser1(), getUser2()],
            nextId: 3,
            isLoaded: true
        };
        const stateAfter = userReducer(stateBefore, action);
        expect(stateAfter).toEqual({
            ...stateBefore,
            users: [getUpdatedUser1(), getUser2()],
            nextId: 3,
        });
    })
});