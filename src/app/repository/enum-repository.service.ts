import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';


@Injectable()
export class EnumRepositoryService {

    private baseUrl: string = "http://localhost:8080/enum/";

    constructor(private http: HttpClient) { }

    getAllItemStatus(): Observable<string[]> {
        return this.http.get<string[]>(this.baseUrl + "itemstatus");
    }

    getAllCategories(): Observable<string[]> {
        return this.http.get<string[]>(this.baseUrl + "categories");
    }
}