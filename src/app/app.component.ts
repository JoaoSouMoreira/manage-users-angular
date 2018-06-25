import { Component } from '@angular/core';
import { UserDataService } from '../providers/user.data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private userDataService: UserDataService) { }
}
