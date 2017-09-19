import { ItemService } from "./item.service";
import { Observable } from "rxjs/Rx";
import { ItemCard } from "../model/item-card";
import { Item } from "../model/item";
import { ItemImpl } from "../model/item.impl";

describe("ItemService", () => {

    let itemService: ItemService;
    let itemRepositoryService: any;
    let itemCards: ItemCard[];
    let item: Item;

    beforeEach(() => {
        itemRepositoryService = jasmine.createSpyObj(itemRepositoryService, ['getItemCards', 'getItemTableLost', 'getItemTableFound', 'getItemById', 'saveItem']);
        itemRepositoryService.getItemCards.and.returnValue(Observable.of(itemCards));
        itemRepositoryService.saveItem.and.returnValue(Observable.of(item));
        itemService = new ItemService(itemRepositoryService);
    })

    it("should call itemRepositoryService getItemCards method once", () => {
        //given
        itemCards = [];
        //when
        itemService.getItemCards();
        //then
        expect(itemRepositoryService.getItemCards).toHaveBeenCalledTimes(1);
    });

    it("should call itemRepositoryService getItemTableLost method once", () => {
        //givenwhen
        itemService.getItemTableLost();
        //then
        expect(itemRepositoryService.getItemTableLost).toHaveBeenCalledTimes(1);
    });

    it("should call itemRepositoryService getItemTableFound method once", () => {
        //givenwhen
        itemService.getItemTableFound();
        //then
        expect(itemRepositoryService.getItemTableFound).toHaveBeenCalledTimes(1);
    });

    it("should call itemRepositoryService getItemById method once", () => {
        //givenwhen
        itemService.getItemById(1);
        //then
        expect(itemRepositoryService.getItemById).toHaveBeenCalledWith(1);
    });

    it("should call itemRepositoryService saveItem method once", () => {
        //given
        item = new ItemImpl('name', 'description', 'category', 'itemStatus',
            [1, 2, 3], 1, 'color', 'photoUrl', 4, null);
        //when
        itemService.saveItem(item);
        //then
        expect(itemRepositoryService.saveItem).toHaveBeenCalledWith(item);
    });

    it("should call itemRepositoryService removeItem method once", () => {
        //given
        item = new ItemImpl('name', 'description', 'category', 'itemStatus',
            [1, 2, 3], 1, 'color', 'photoUrl', 4, null);
        let returned: Item
        //when
        itemService.removeItem(item).subscribe(i => returned = i);
        //then
        expect(itemRepositoryService.saveItem).toHaveBeenCalledWith(item);
        expect(item.itemStatus).toBe("COMPLETED");
    });

});