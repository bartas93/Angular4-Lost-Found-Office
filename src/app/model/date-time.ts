export interface DateTime {
    year: number,
    month: string,
    era: string,
    dayOfMonth: number,
    dayOfWeek: string,
    dayOfYear: number,
    leapYear: boolean,
    monthValue: number,
    chronology: {
        id: string,
        calendarType: string
    }
}