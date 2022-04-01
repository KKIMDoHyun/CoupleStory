import { observable } from "mobx";
import { DateStoreType } from "./DateStore.type";
import moment from "moment";

const DateStore: DateStoreType = observable({
  // state
  today: moment(),
  FirstDay: moment("2020-11-27"),
  // action
  getToday() {
    return this.today;
  },
  getFirstDay() {
    return this.FirstDay;
  },
  getLovingDay() {
    let day: number = this.today.diff(this.FirstDay, "days");
    let dayArr = [];
    let temp = 10;
    while (day > 0) {
      dayArr.push(day % temp);
      day = Math.floor(day / temp);
    }
    dayArr.reverse();
    return dayArr;
  },
});

export default DateStore;
