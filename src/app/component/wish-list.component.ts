import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

import { ItemService } from '../service/item.service';
import { ItemCard } from '../model/item-card';


@Component({
    templateUrl: './wish-list.component.html',
    styleUrls: ['./wish-list.component.css']
})
export class WishListComponent implements OnInit {
    itemsCard: ItemCard[];

    constructor(private itemService: ItemService) { }

    getCardItems(): void {
        this.itemService.getItemCards().subscribe(items => this.itemsCard = items);
    }

    ngOnInit() {
        this.getCardItems();
    }
}