import { DateUtilService } from "./date-util.service";

describe("DateUtilService", function () {

    let dateUtilService: DateUtilService;

    beforeEach(() => {
        dateUtilService = new DateUtilService();
    });


    it('should get 4 days', () => {
        //given
        let today = new Date();
        let dateFromRest: number[] = [today.getFullYear(), today.getMonth(), today.getDate() + 4];
        //when
        let days: number = dateUtilService.getLeastDays(dateFromRest);
        //then
        expect(days).toBe(4)
    });

    it('should map localdate form spring to date in js', () => {
        //given
        let today = new Date();
        let dateFromRest: number[] = [today.getFullYear(), today.getMonth() + 1, today.getDate()];
        //when
        let date: Date = dateUtilService.localDateToDate(dateFromRest);
        //then
        expect(date.getDay()).toBe(today.getDay());
        expect(date.getMonth()).toBe(today.getMonth());
        expect(date.getFullYear()).toBe(today.getFullYear());
    });

    it('should map date to local date from spring', () => {
        //given
        let today = new Date();
        let dateFromRest: number[] = [today.getFullYear(), today.getMonth() + 1, today.getDate()];
        //when
        let date: number[] = dateUtilService.dateToLocalDate(today);
        //then
        expect(date[0]).toBe(dateFromRest[0]);
        expect(date[1]).toBe(dateFromRest[1]);
        expect(date[2]).toBe(dateFromRest[2]);
    });

});