import { User } from './user';

export interface ItemCard {
    id: number,
    name: string,
    description: string,
    category: string,
    notificationDate: number[],
    photoUrl: string,
    wishList: User[]
}