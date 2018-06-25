import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { UserDataService } from '../../providers/user.data';
import { UserState } from '../../reducers/user.reducer';

@Component({
    selector: 'list-users',
    templateUrl: './list-users.html',
    styleUrls: ['./list-users.scss']
})
export class ListUsersComponent implements OnInit {

    private state$: Observable<UserState>;

    constructor(private userDataService: UserDataService) { }

    ngOnInit() {
        this.state$ = this.userDataService.store();
    }

    deleteUser(id: number) {
        this.userDataService.deleteUser(id);
    } 
}
