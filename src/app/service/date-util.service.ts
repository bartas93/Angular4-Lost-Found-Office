import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class DateUtilService {


    getLeastDays(notificationDate: number[]): number {
        let month = notificationDate[1];
        let today = new Date().getTime();
        let countDownDate = new Date(notificationDate[0],
            notificationDate[1],
            notificationDate[2], 0, 0, 0, 0).getTime();
        let distance = countDownDate - today;
        return Math.floor(distance / (1000 * 60 * 60 * 24));
    }

    localDateToDate(localDate: number[]): Date {
        if (localDate != null) {
            return new Date(localDate[0], localDate[1], localDate[2], 0, 0, 0, 0);
        }
    }

    getCurrentDateAsLocalDate() {
        let currentDate = new Date();
        return this.dateToLocalDate(currentDate);
    }
    dateToLocalDate(date: Date): number[] {
        if (date != null) {
            return [date.getFullYear(), date.getMonth(), date.getDate()];
        }
    }

}