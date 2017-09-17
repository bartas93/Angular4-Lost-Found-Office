import { Component, OnInit } from '@angular/core';
import { UserService } from "../../service/user.service";
import { User } from "../../model/user";
declare var $: any;

@Component({
    templateUrl: 'users.component.html',
    styleUrls: ['users.component.css']
})
export class UsersComponent implements OnInit {
    private users: User[];
    displayedColumns = ['Id', 'Name', 'Surname', 'Email', 'Phone number', 'In wishlists'];

    constructor(private userService: UserService) { }

    ngOnInit() {
        this.getUsers();
    }

    private getUsers() {
        this.userService.getUsers().subscribe(users => {
            this.users = users;
            this.enableGeneralDataProcessing();
        });
    }

    private enableGeneralDataProcessing(): void {
        $(document).ready(function () {
            $('#table_id').DataTable();
        });
    }

}