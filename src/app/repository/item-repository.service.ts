import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { ItemCard } from '../model/item-card';
import { Item } from "../model/item";

@Injectable()
export class ItemRepositoryService {

    private baseUrl: string = "http://localhost:8080/item/";

    constructor(private http: HttpClient) { }

    getItemCards(): Observable<ItemCard[]> {
        return this.http.get<ItemCard[]>(this.baseUrl + "cards");
    }



    getItemById(id: number): Observable<Item> {
        return this.http.get<Item>(this.baseUrl + id);
    }
}