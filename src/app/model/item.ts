import { User } from './user';
import { DateTime } from './date-time';

export interface Item {
    id: number,
    name: string,
    description: string,
    category: string,
    itemStatus: string,
    notificationDate: DateTime,
    realizationDate: DateTime,
    weight: number,
    color: string,
    photoUrl: string,
    quantityOfStars: number,
    owner: User,
    finder: User,
    wishList: User[]
}