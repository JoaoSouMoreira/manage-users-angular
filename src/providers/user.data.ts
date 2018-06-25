import { dispatch, NgRedux } from '@angular-redux/store';
import { Injectable } from '@angular/core';

import { UserService } from './user.service';
import { UserState } from '../reducers/user.reducer';
import { User } from '../models/user.model';

interface Action<T, P> {
    readonly type: T;
    readonly payload: P;
}

@Injectable()
export class UserDataService {

    private isLoaded: boolean;

    store = () => this.ngRedux.select<UserState>(state => { this.isLoaded = state.isLoaded; return state; });

    constructor(public userService: UserService,
        public ngRedux: NgRedux<UserState>) { 
            this.fetchUsers();
        }

    @dispatch()
    fetchUsers = (): FetchAction => {
        const payload = this.userService.getUsers().toPromise();
        return ({ type: UserActionType.FETCH_ALL, payload })
    }

    @dispatch()
    addUser = (user: User): AddAction => {
        return ({ type: UserActionType.ADD, payload: user })
    }

    @dispatch()
    updateUser = (user: User): UpdateAction => {
        return ({ type: UserActionType.UPDATE, payload: user });
    }

    @dispatch()
    deleteUser = (id: number): DeleteAction => {
        return ({ type: UserActionType.DELETE, payload: id });
    }

}

export enum UserActionType {
    FETCH_ALL = 'USERS_FETCH_ALL',
    ADD = 'USERS_ADD',
    UPDATE = 'USERS_UPDATE',
    DELETE = 'USERS_DELETE',
}

export type FetchAction = Action<UserActionType.FETCH_ALL, Promise<User[]> | User[]>
export type AddAction = Action<UserActionType.ADD, User>
export type UpdateAction = Action<UserActionType.UPDATE, User>
export type DeleteAction = Action<UserActionType.DELETE, number>

export type UserActionTypes =
    | FetchAction
    | AddAction
    | UpdateAction
    | DeleteAction