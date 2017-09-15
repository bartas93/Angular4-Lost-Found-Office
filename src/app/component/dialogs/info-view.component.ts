import { Component, Input } from '@angular/core';
import { Item } from "../../model/item";

@Component({
    selector: 'info-view',
    templateUrl: './info-view.component.html',
    styleUrls: ['./info-view.component.css']
})
export class InfoViewComponent {

    @Input() item: Item;
}