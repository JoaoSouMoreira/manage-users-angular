import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { combineLatest } from 'rxjs';

import { User } from '../../models/user.model';
import { UserDataService } from '../../providers/user.data';
import { UserState } from '../../reducers/user.reducer';

@Component({
  selector: 'edit-user',
  templateUrl: './edit-user.html',
  styleUrls: ['./edit-user.scss']
})
export class EditUserComponent implements OnInit {

  private user: User;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private userDataService: UserDataService) { }

  ngOnInit() {
    combineLatest(this.userDataService.store(), this.route.paramMap)
      .subscribe((state: [UserState, ParamMap]) => {
        const [userState, params] = state;
        const selectedId = +params.get('id');
        // Make sure to create a copy of the user as to not change the data in Redux store.
        this.user = {
          ...userState.users.find((user) => user.id === selectedId)
        }
      });
  }

  onSubmit() {
    this.userDataService.updateUser(this.user);
    this.router.navigate(['']);
  }

}
