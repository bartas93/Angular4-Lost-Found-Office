import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import { ItemCard } from '../model/item-card';
import { Item } from '../model/item';
import { ItemRepositoryService } from '../repository/item-repository.service';
import { ItemTable } from "../model/item-table";

@Injectable()
export class ItemService {

    constructor(private itemRepositoryService: ItemRepositoryService) { }

    getItemCards(): Observable<ItemCard[]> {
        return this.itemRepositoryService.getItemCards();
    }

    getItemTableLost(): Observable<ItemTable[]> {
        return this.itemRepositoryService.getItemTableLost();
    }

    getItemTableFound(): Observable<ItemTable[]> {
        return this.itemRepositoryService.getItemTableFound();
    }

    getItemById(id: number): Observable<Item> {
        return this.itemRepositoryService.getItemById(id);
    }

    saveItem(item: Item): Observable<Item> {
        return this.itemRepositoryService.saveItem(item);
    }

    removeItem(item: Item): Observable<Item> {
        item.itemStatus = "COMPLETED";
        return this.itemRepositoryService.saveItem(item);
    }
}