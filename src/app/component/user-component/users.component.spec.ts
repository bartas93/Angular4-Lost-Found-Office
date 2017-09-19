import { Observable } from "rxjs/Observable";
import 'rxjs/Rx';
import { TestBed } from "@angular/core/testing";
import { ComponentFixture } from "@angular/core/testing";
import { DebugElement } from "@angular/core";
import { By } from "@angular/platform-browser";
import { HttpModule } from "@angular/http";
import { UsersComponent } from "./users.component";
import { UserService } from "../../service/user.service";
import { User } from "../../model/user";
import { async } from "@angular/core/testing";
declare var $: any;

describe("UsersComponent", () => {

    /* let fixture: ComponentFixture<UsersComponent>;
    let usersComponent: UsersComponent;
    let de: DebugElement;
    let userService: any;
    let users: User[];
    let userServiceStub: any = {
        getUsers: () => Observable.of(users)
    };;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [HttpModule],
            declarations: [UsersComponent],
            providers: [{ provide: UserService, useValue: userServiceStub }]
        })
            .compileComponents();
    }));

    beforeEach(() => {

        fixture = TestBed.createComponent(UsersComponent);
        usersComponent = fixture.componentInstance;
        de = fixture.debugElement;

    })

    it("should get users and put them to table", () => {
        //given
        users = [{
            id: 1,
            name: "name1",
            surname: "surname1",
            email: "email1",
            phoneNumber: "number1",
            inWishlists: 1

        }, {
            id: 2,
            name: "name2",
            surname: "surname2",
            email: "email2",
            phoneNumber: "number2",
            inWishlists: 3
        }];
        //when
        fixture.detectChanges();
        const el = de.query(By.css('td:first-of-type')).nativeElement;
        //then
        expect(el.textContent).toEqual('name1');
    }); */
});