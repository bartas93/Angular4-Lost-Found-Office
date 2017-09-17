import { Component, OnInit } from '@angular/core';
import { ItemService } from "../../service/item.service";
import { ItemTable } from "../../model/item-table";
import { MdDialog, MdDialogRef, MD_DIALOG_DATA, MdSnackBar } from '@angular/material'
import { Item } from "../../model/item";
import { ItemImpl } from "../../model/item.impl";
import { ItemDialogComponent } from "./dialogs/item-dialog.component";
import { MessageComponent } from "../alerts/message.component";
import { DateUtilService } from "../../service/date-util.service";
declare var $: any;

@Component({
    templateUrl: 'found.component.html',
    styleUrls: ['found.component.css']
})
export class FoundComponent implements OnInit {
    private itemsTable: ItemTable[];
    private currentItem: Item;
    displayedColumns = ['Id', 'Name', 'Category', 'Added', 'Weight', 'Color'];
    newItem: Item = new ItemImpl("", "", "", "FOUND", this.dateUtilService.getCurrentDateAsLocalDate(), 0, "", "", -1);

    constructor(private itemService: ItemService, public snackBar: MdSnackBar, public dialog: MdDialog, private dateUtilService: DateUtilService) { }

    ngOnInit() {
        this.getItemsTable();
    }

    addNewItem() {
        this.goToDialog(this.newItem, false);
    }

    private getItemsTable() {
        this.itemService.getItemTableFound().subscribe(items => {
            this.itemsTable = items;
            this.enableGeneralDataProcessing();
        });
    }

    private enableGeneralDataProcessing(): void {
        $(document).ready(function () {
            $('#table_id').DataTable();
        });
    }

    openDialog(id: number): void {
        this.itemService.getItemById(id).subscribe(item => {
            this.currentItem = item;
            this.goToDialog(item, true);

        });
    }

    goToDialog(item: Item, currentInfoView: boolean) {
        let dialogRef = this.dialog.open(ItemDialogComponent, {
            height: '90%',
            width: '80%',
            data: {
                item: item,
                currentInfoView: currentInfoView
            }
        });
        dialogRef.afterClosed().subscribe(result => {
            this.itemService.getItemTableLost().subscribe(res => {
                this.itemsTable = res;
            });
            this.openSnackBar(result);
        });
    }

    openSnackBar(result: Item) {
        if (result != null && result.name != null) {
            let message: string;
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