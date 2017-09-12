import { User } from './user';
import { DateTime } from './date-time';

export interface Item {
    id: number,
    name: string,
    category: string,
    itemStatus: string,
    notificationDate: DateTime,
    weight: number,
    color: string,
}