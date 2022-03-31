import moment from "moment";

export type DateStoreType = {
  today: moment.Moment;
  FirstDay: moment.Moment;

  getToday: () => moment.Moment;
  getFirstDay: () => moment.Moment;
  getLovingDay: () => number;
};
