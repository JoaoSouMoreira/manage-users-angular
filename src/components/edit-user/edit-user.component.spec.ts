import { ComponentFixture, TestBed } from "@angular/core/testing";
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

import { EditUserComponent } from "./edit-user.component";
import { UserDataService } from "../../providers/user.data";
import { UserDataServiceMock } from "../../testing/service.mock";

describe('AddUserComponent', () => {

    let component: EditUserComponent;
    let fixture: ComponentFixture<EditUserComponent>;
    let instance: any;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [ EditUserComponent ],
            imports: [ 
                RouterTestingModule,
                FormsModule
            ],
            providers: [
                { provide: UserDataService, useFactory: () => UserDataServiceMock.instance() },
            ]
        });
        fixture = TestBed.createComponent(EditUserComponent);
        component = fixture.componentInstance;
        instance = fixture.debugElement.componentInstance;
        fixture.detectChanges();
    });

    it('should render correctly', () => {
        expect(instance).toBeTruthy();
    });
});