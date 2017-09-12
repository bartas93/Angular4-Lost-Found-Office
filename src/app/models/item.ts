import { User } from './user';

export interface Item {
    id: number,
    name: string,
    description: string,
    category: string,
    itemStatus: string,
    notificationDate: Date,
    realizationDate: Date,
    weight: number,
    color: string,
    photoUrl: string,
    quantityOfStars: number,
    owner: User,
    finder: User,
    wishList: User[]
}