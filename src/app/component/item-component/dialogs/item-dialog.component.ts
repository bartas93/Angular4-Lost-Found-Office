import { Component, Inject } from '@angular/core';
import { MdDialog, MdDialogRef, MD_DIALOG_DATA } from '@angular/material';
import { Item } from "../../../model/item";
import { ItemService } from "../../../service/item.service";
import { ItemCard } from "../../../model/item-card";


@Component({
    selector: 'item-dialog.component',
    templateUrl: 'item-dialog.component.html',
    styleUrls: ['item-dialog.component.css']
})

export class ItemDialogComponent {

    private currentInfoView: boolean = true;

    constructor(private itemService: ItemService, public dialogRef: MdDialogRef<ItemDialogComponent>,
        @Inject(MD_DIALOG_DATA) public data: any) { }

    changeView() {
        this.currentInfoView ? this.currentInfoView = false : this.currentInfoView = true;
    }

    onNoClick(): void {
        this.dialogRef.close();
    }

    itemChanged(item: Item) {
        this.itemService.saveItem(item).subscribe(itemCard => this.dialogRef.close(itemCard));
    }
}