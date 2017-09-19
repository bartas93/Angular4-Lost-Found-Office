import { Observable } from "rxjs/Rx";
import { UserService } from "./user.service";
import { User } from "../model/user";
import { Item } from "../model/item";
import { ItemImpl } from "../model/item.impl";

describe("UserService", () => {

    let userService: UserService;
    let userRepositoryService: any;
    let users: User[];
    let item: Item;

    beforeEach(() => {
        userRepositoryService = jasmine.createSpyObj(userRepositoryService, ['getUsers']);
        userRepositoryService.getUsers.and.returnValue(Observable.of(users));
        userService = new UserService(userRepositoryService);
    })

    it("should call userRepositoryService getUsers method once", () => {
        //given when
        userService.getUsers();
        //then
        expect(userRepositoryService.getUsers).toHaveBeenCalledTimes(1);
    });

    it("should get none users that can be added to wishList ", () => {
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
        item = new ItemImpl('name', 'description', 'category', 'itemStatus',
            [1, 2, 3], 1, 'color', 'photoUrl', 4, users);
        //when
        let returnedUsers = userService.getUsersCanBeAddedToWishList(users, item);
        //then
        expect(returnedUsers).toEqual([]);
    });

    it("should get only first user that can be added to wishList ", () => {
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
        item = new ItemImpl('name', 'description', 'category', 'itemStatus',
            [1, 2, 3], 1, 'color', 'photoUrl', 4, []);
        //when
        let returnedUsers = userService.getUsersCanBeAddedToWishList(users, item);
        //then
        expect(returnedUsers[0].name).toEqual("name1");
        expect(returnedUsers[0].surname).toEqual("surname1");
        expect(returnedUsers[0].email).toEqual("email1");
        expect(returnedUsers[0].inWishlists).toEqual(1);
    });

});