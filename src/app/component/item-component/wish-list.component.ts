import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

import { MdDialog, MdDialogRef, MD_DIALOG_DATA, MdSnackBar } from '@angular/material'

import { ItemService } from '../../service/item.service';
import { DateUtilService } from '../../service/date-util.service';
import { ItemCard } from '../../model/item-card';
import { ItemDialogComponent } from "./dialogs/item-dialog.component";
import { Item } from "../../model/item";
import { HttpErrorResponse } from "@angular/common/http";
import { MessageComponent } from "../alerts/message.component";


@Component({
    templateUrl: './wish-list.component.html',
    styleUrls: ['./wish-list.component.css']
})
export class WishListComponent implements OnInit {
    private itemsCard: ItemCard[];
    private currentItem: Item;
    private initFlag: boolean = true;

    constructor(private itemService: ItemService, public snackBar: MdSnackBar, public dialog: MdDialog, private dateUtilService: DateUtilService) { }


    ngOnInit() {
        this.getCardItems();
    }

    getCardItems(): void {
        this.itemService.getItemCards().subscribe(items => this.itemsCard = items);
    }

    getLeastDaysString(notificationDate: number[]): string {
        let days = this.dateUtilService.getLeastDays(notificationDate);
        if (days < 0) {
            return "Item is ready to collect!";
        } else {
            return "Ready for collection in " + days + " days";
        }
    }

    openDialog(id: number): void {
        this.initFlag = false;
        this.itemService.getItemById(id).subscribe(item => {
            this.currentItem = item;
            let dialogRef = this.dialog.open(ItemDialogComponent, {
                height: '90%',
                width: '80%',
                data: {
                    item: this.currentItem,
                    currentInfoView: true
                }
            });
            dialogRef.afterClosed().subscribe(result => {
                this.itemService.getItemCards().subscribe(res => {
                    this.itemsCard = res;
                });
                this.openSnackBar(result);
            });
        });
    }

    openSnackBar(result: Item) {
        let message: string;
        if (result.name != null) {
            if (result.itemStatus == "COMPLETED") {
                message = "Item deleted:";
            } else { message = "Item saved:" }
            this.snackBar.openFromComponent(MessageComponent, {
                data: {
                    message: message,
                    item: result
                },
                duration: 2000,
            });
        }
    }
}