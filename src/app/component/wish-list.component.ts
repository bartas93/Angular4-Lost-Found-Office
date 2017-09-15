import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

import { MdDialog, MdDialogRef, MD_DIALOG_DATA } from '@angular/material'

import { ItemService } from '../service/item.service';
import { ItemCard } from '../model/item-card';
import { DateTime } from "../model/date-time";
import { InfoDialogComponent } from "./dialogs/info-dialog.component";
import { Item } from "../model/item";
import { HttpErrorResponse } from "@angular/common/http";


@Component({
    templateUrl: './wish-list.component.html',
    styleUrls: ['./wish-list.component.css']
})
export class WishListComponent implements OnInit {
    private itemsCard: ItemCard[];
    private currentItem: Item;

    constructor(private itemService: ItemService, public dialog: MdDialog) { }

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

    openDialog(id: number): void {
        this.itemService.getItemById(id).subscribe(item => {
            this.currentItem = item;
            let dialogRef = this.dialog.open(InfoDialogComponent, {
                height: '90%',
                width: '80%',
                data: { item: this.currentItem }
            });
            dialogRef.afterClosed().subscribe(result => {
                console.log(result);
            });
        });


    }
}