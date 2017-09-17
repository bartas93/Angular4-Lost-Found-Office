import { User } from './user';

export interface ItemTable {
    id: number,
    name: string,
    category: string,
    itemStatus: string,
    notificationDate: number[],
    weight: number,
    color: string,
}