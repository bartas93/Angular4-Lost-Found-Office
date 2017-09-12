import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { ItemCard } from '../model/item-card';

@Injectable()
export class ItemRepositoryService {

    private itemCardsUrl: string = 'http://localhost:8080/item/cards';
    constructor(private http: Http) { }

    getItemCards(): Observable<ItemCard[]> {
        return this.http.get(this.itemCardsUrl).map(response => response.json() || []);
    }
}