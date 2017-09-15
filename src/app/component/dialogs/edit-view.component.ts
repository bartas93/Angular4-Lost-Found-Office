import { Component, Input } from '@angular/core';
import { Item } from "../../model/item";

@Component({
    selector: 'edit-view',
    templateUrl: './edit-view.component.html',
    styleUrls: ['./edit-view.component.css']
})
export class EditViewComponent {
    @Input() item: Item;

    private allItemStatus = ["LOST", "FOUND", "COMPLETED"];
    private allCategories = ["KEY", "PHONE", "BACKPACK", "DOCUMENTS", "WALLET", "BAG", "GLASSES", "CLOCK", "CLOTH", "OTHER"];

    private notificationDate: Date;
    private realizationDate: Date;
}
