import { User } from './user';
import { DateTime } from './date-time';

export interface ItemCard {
    id: number,
    name: string,
    description: string,
    category: string,
    notificationDate: DateTime,
    photoUrl: string,
    wishList: User[]
}