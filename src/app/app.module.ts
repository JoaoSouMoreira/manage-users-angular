import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { NgRedux, NgReduxModule } from '@angular-redux/store';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { Components } from './index/components';
import { promiseMiddleware } from './middleware/promise-middleware';
import { UserDataService } from '../providers/user.data';
import { userReducer, UserState, USER_INITIAL_STATE } from '../reducers/user.reducer';
import { UserService } from '../providers/user.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgReduxModule,
    ...Components
  ],
  providers: [
    UserService,
    UserDataService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor(ngRedux: NgRedux<UserState>) {
    const middlewares = [promiseMiddleware];
    ngRedux.configureStore(userReducer, USER_INITIAL_STATE, middlewares);
  }
}
