import { AddAction, DeleteAction, FetchAction, UpdateAction, UserActionType, UserActionTypes } from '../providers/user.data';
import { User } from '../models/user.model';

export type UserState = {
    users: User[];
    nextId: number;
    isLoaded: boolean;
}

export const USER_INITIAL_STATE: UserState = {
    users: [],
    nextId: 1,
    isLoaded: false,
}

export function userReducer(state: UserState, action: UserActionTypes): UserState {
    switch (action.type) {
        case UserActionType.FETCH_ALL: return setUsers(action);
        case UserActionType.ADD: return addUser(state, action);
        case UserActionType.UPDATE: return updateUser(state, action);
        case UserActionType.DELETE: return deleteUser(state, action);
    }
    return state;
}

const setUsers = (action: FetchAction): UserState => {
    const users = action.payload as User[];
    
    if (users.length === 0)
        return { users, nextId: 1, isLoaded: true };
        
    const ids = users.map((user) => user.id);
    const nextId = Math.max(...ids) + 1;
    return { users, nextId, isLoaded: true };
}

const addUser = (state: UserState, action: AddAction): UserState => {
    const users = state.users;
    const newUser = {
        ...action.payload,
        id: state.nextId
    };
    users.push(newUser);

    return {
        ...state,
        users,
        nextId: state.nextId + 1
    };
}

const updateUser = (state: UserState, action: UpdateAction): UserState => {
    const userToUpdate = action.payload;
    const users = state.users.map((user) => {
        if (user.id === userToUpdate.id)
            return userToUpdate;

        return user;
    });

    return { ...state, users };
}

const deleteUser = (state: UserState, action: DeleteAction): UserState => {
    const idToDelete = action.payload;
    const users = state.users.filter((user) => user.id !== idToDelete);

    return { ...state, users };
}