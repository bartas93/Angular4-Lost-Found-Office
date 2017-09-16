import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import { ItemCard } from '../model/item-card';
import { Item } from '../model/item';
import { ItemRepositoryService } from '../repository/item-repository.service';

@Injectable()
export class ItemService {

    constructor(private itemRepositoryService: ItemRepositoryService) { }

    getItemCards(): Observable<ItemCard[]> {
        return this.itemRepositoryService.getItemCards();
    }

    getItemById(id: number): Observable<Item> {
        return this.itemRepositoryService.getItemById(id);
    }
}