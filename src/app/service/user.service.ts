import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { UserRepositoryService } from '../repository/user-repository.service';
import { User } from "../model/user";
import { Item } from "../model/item";
declare var $: any;

@Injectable()
export class UserService {

    constructor(private userRepositoryService: UserRepositoryService) { }

    getUsers(): Observable<User[]> {
        return this.userRepositoryService.getUsers();
    }

    getUsersCanBeAddedToWishList(users: User[], item: Item): User[] {
        let usersInLessThenThreeWishLists: User[] = users.filter(u => u.inWishlists < 3);
        if (item.wishList != null) {
            return usersInLessThenThreeWishLists.filter(user => !item.wishList.some(u => u.id == user.id));
        } else { return usersInLessThenThreeWishLists; }

    }


}