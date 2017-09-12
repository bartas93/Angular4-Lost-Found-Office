import { User } from './user';

export interface Item {
    id: number,
    name: string,
    category: string,
    itemStatus: string,
    notificationDate: Date,
    weight: number,
    color: string,
}