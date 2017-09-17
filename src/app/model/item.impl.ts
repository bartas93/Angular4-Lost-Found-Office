import { Item } from "./item";
import { User } from "./user";

export class ItemImpl implements Item {
    id: number;
    name: string;
    description: string;
    category: string;
    itemStatus: string;
    notificationDate: number[];
    realizationDate: number[];
    weight: number;
    color: string;
    photoUrl: string;
    quantityOfStars: number;
    owner: User;
    finder: User;
    wishList: User[];

    constructor(name: string, description: string, category: string, itemStatus: string,
        notificationDate: number[], weight: number, color: string, photoUrl: string, quantityOfStars: number) {
        this.name = name;
        this.description = description;
        this.category = category;
        this.itemStatus = itemStatus;
        this.notificationDate = notificationDate;
        this.weight = weight;
        this.color = color;
        this.photoUrl = photoUrl;
        this.quantityOfStars = quantityOfStars;
    }
}