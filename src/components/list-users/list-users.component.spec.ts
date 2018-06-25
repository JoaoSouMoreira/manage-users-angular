import { ComponentFixture, TestBed } from "@angular/core/testing";
import { RouterTestingModule } from '@angular/router/testing';

import { ListUsersComponent } from "./list-users.component";
import { UserDataService } from "../../providers/user.data";
import { UserDataServiceMock } from "../../testing/service.mock";

describe('AddUserComponent', () => {

    let component: ListUsersComponent;
    let fixture: ComponentFixture<ListUsersComponent>;
    let instance: any;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [ ListUsersComponent ],
            imports: [ 
                RouterTestingModule,
            ],
            providers: [
                { provide: UserDataService, useFactory: () => UserDataServiceMock.instance() },
            ]
        });
        fixture = TestBed.createComponent(ListUsersComponent);
        component = fixture.componentInstance;
        instance = fixture.debugElement.componentInstance;
        fixture.detectChanges();
    });

    it('should render correctly', () => {
        expect(instance).toBeTruthy();
    });
});