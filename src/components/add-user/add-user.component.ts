import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../../models/user.model';
import { UserDataService } from '../../providers/user.data';
import { Utils } from '../../utils/utils';

@Component({
    selector: 'add-user',
    templateUrl: '../edit-user/edit-user.html',
    styleUrls: ['../edit-user/edit-user.scss']
})
export class AddUserComponent {

    private user: User;

    constructor(private router: Router,
        private userDataService: UserDataService) { }

    ngOnInit() {
        this.user = Utils.getEmptyUser();
    }

    onSubmit() {
        this.userDataService.addUser(this.user);
        this.router.navigate(['']);
    }
}
