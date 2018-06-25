import { ComponentFixture, TestBed } from "@angular/core/testing";
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

import { AddUserComponent } from "./add-user.component";
import { UserDataService } from "../../providers/user.data";
import { UserDataServiceMock } from "../../testing/service.mock";

describe('AddUserComponent', () => {

    let component: AddUserComponent;
    let fixture: ComponentFixture<AddUserComponent>;
    let instance: any;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [ AddUserComponent ],
            imports: [ 
                RouterTestingModule,
                FormsModule
            ],
            providers: [
                { provide: UserDataService, useFactory: () => UserDataServiceMock.instance() },
            ]
        });
        fixture = TestBed.createComponent(AddUserComponent);
        component = fixture.componentInstance;
        instance = fixture.debugElement.componentInstance;
        fixture.detectChanges();
    });

    it('should render correctly', () => {
        expect(instance).toBeTruthy();
    });
});