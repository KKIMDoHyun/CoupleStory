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
    return this.today.diff(this.FirstDay, "days");
  },
});

export default DateStore;
