import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

import { ItemService } from '../service/item.service';
import { ItemCard } from '../model/item-card';
import { DateTime } from "../model/date-time";


@Component({
    templateUrl: './wish-list.component.html',
    styleUrls: ['./wish-list.component.css']
})
export class WishListComponent implements OnInit {
    private itemsCard: ItemCard[];

    constructor(private itemService: ItemService) { }

    getCardItems(): void {
        this.itemService.getItemCards().subscribe(items => this.itemsCard = items);
    }

    ngOnInit() {
        this.getCardItems();
    }

    getLeastDaysString(notificationDate: DateTime): string {
        let days = this.itemService.getLeastDays(notificationDate);
        if (days < 0) {
            return "Item is ready to collect!";
        } else {
            return "Ready for collection in " + days + " days";
        }
    }
}