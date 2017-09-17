import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { ItemCard } from '../model/item-card';
import { ItemTable } from '../model/item-table';
import { Item } from "../model/item";

@Injectable()
export class ItemRepositoryService {

    private baseUrl: string = "http://localhost:8080/item/";

    constructor(private http: HttpClient) { }

    getItemCards(): Observable<ItemCard[]> {
        return this.http.get<ItemCard[]>(this.baseUrl + "cards");
    }

    getItemTableLost(): Observable<ItemTable[]> {
        return this.http.get<ItemTable[]>(this.baseUrl + "table-lost");
    }

    getItemTableFound(): Observable<ItemTable[]> {
        return this.http.get<ItemTable[]>(this.baseUrl + "table-found");
    }

    getItemById(id: number): Observable<Item> {
        return this.http.get<Item>(this.baseUrl + id);
    }

    saveItem(item: Item): Observable<Item> {
        return this.http.post<Item>(this.baseUrl + "save", item);
    }

}