import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { UserRepositoryService } from '../repository/user-repository.service';
import { User } from "../model/user";
import { Item } from "../model/item";

@Injectable()
export class UserService {

    constructor(private userRepositoryService: UserRepositoryService) { }

    getUsers(): Observable<User[]> {
        return this.userRepositoryService.getUsers();
    }

    private isLessThenThree(num: number): boolean {
        return num < 3;
    }

    private getUserWhoseAreLessThenInThreeLists(allUsers: User[]): User[] {
        let filtred = allUsers.filter((user) => this.isLessThenThree(user.inWishLists));
        return filtred;
    }

    getUsersCanBeAddedToWishList(users: User[], item: Item): User[] {
        let usersInLessThenThreeWishLists: User[] = this.getUserWhoseAreLessThenInThreeLists(users);
        return usersInLessThenThreeWishLists.filter(user => !item.wishList.some(u => u.id == user.id));
    }

}