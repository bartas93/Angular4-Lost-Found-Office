import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

import { User } from "../model/user";


@Injectable()
export class UserRepositoryService {

    private baseUrl: string = "http://localhost:8080/user/";

    constructor(private http: HttpClient) { }

    getUsers(): Observable<User[]> {
        return this.http.get<User[]>(this.baseUrl + "all");
    }

}