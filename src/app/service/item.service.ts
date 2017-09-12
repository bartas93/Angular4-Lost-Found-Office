import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import { ItemCard } from '../model/item-card';
import { ItemRepositoryService } from '../repository/item-repository.service';
import { DateTime } from "../model/date-time";

@Injectable()
export class ItemService {

    constructor(private itemRepositoryService: ItemRepositoryService) { }

    getItemCards(): Observable<ItemCard[]> {
        return this.itemRepositoryService.getItemCards();
    }
    getLeastDays(notificationDate: DateTime): number {
        let month = notificationDate.monthValue;
        let today = new Date().getTime();
        let countDownDate = new Date(notificationDate.year,
            notificationDate.monthValue,
            notificationDate.dayOfMonth, 0, 0, 0, 0).getTime();
        let distance = countDownDate - today;
        return Math.floor(distance / (1000 * 60 * 60 * 24));
    }
}