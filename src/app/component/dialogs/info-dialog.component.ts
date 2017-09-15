import { Component, Inject } from '@angular/core';
import { MdDialog, MdDialogRef, MD_DIALOG_DATA } from '@angular/material';
import { Item } from "../../model/item";

@Component({
    selector: 'info-dialog.component',
    templateUrl: 'info-dialog.component.html',
    styleUrls: ['info-dialog.component.css']
})

export class InfoDialogComponent {

    private currentInfoView: boolean = true;

    constructor(public dialogRef: MdDialogRef<InfoDialogComponent>,
        @Inject(MD_DIALOG_DATA) public data: any) { }

    changeView() {
        this.currentInfoView ? this.currentInfoView = false : this.currentInfoView = true;
    }

    onNoClick(): void {
        this.dialogRef.close();
    }
}