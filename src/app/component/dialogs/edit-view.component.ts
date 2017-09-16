import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Item } from "../../model/item";
import { User } from "../../model/user";
import { ItemService } from '../../service/item.service';
import { UserService } from '../../service/user.service';
import { DateUtilService } from '../../service/date-util.service';
import { EnumRepositoryService } from '../../repository/enum-repository.service';
declare var $: any;

@Component({
    selector: 'edit-view',
    templateUrl: './edit-view.component.html',
    styleUrls: ['./edit-view.component.css']
})
export class EditViewComponent implements OnInit {
    @Input() item: Item;
    @Output() itemCallBack = new EventEmitter<Item>();


    private allItemStatus = [];
    private allCategories = [];
    private notificationDate: Date;
    private realizationDate: Date;
    private users: User[];
    private usersCanBeAddedToWishList: User[];
    private wishListUsers: User[] = [];

    constructor(private itemService: ItemService, private enumRepositoryService: EnumRepositoryService, private userService: UserService, private dateUtilService: DateUtilService) { }

    ngOnInit() {
        this.enumRepositoryService.getAllItemStatus().subscribe(res => this.allItemStatus = res);
        this.enumRepositoryService.getAllCategories().subscribe(res => this.allCategories = res);
        this.userService.getUsers().subscribe(res => { this.users = res; this.usersCanBeAddedToWishList = this.userService.getUsersCanBeAddedToWishList(res, this.item); });
        this.item.notificationDate? this.notificationDate = this.dateUtilService.localDateToDate(this.item.notificationDate):this.notificationDate = null; 
        this.item.realizationDate? this.realizationDate = this.dateUtilService.localDateToDate(this.item.realizationDate):this.realizationDate=null;
    }
   
    saveChanges() {
        this.wishListUsers.forEach(user => this.item.wishList.push(user));   
        this.item.notificationDate = this.dateUtilService.dateToLocalDate(this.notificationDate);
        this.item.realizationDate = this.dateUtilService.dateToLocalDate(this.realizationDate);
        this.itemCallBack.emit(this.item)
    }


}
