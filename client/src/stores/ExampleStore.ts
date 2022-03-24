import { observable } from "mobx";
import { ExampleStoreType } from "./ExampleStore.type";
const ExampleStore: ExampleStoreType = observable({
  // state
  num: 0,

  // action
  increaseAction(num: number) {
    this.num = this.num + num;
  },

  decreaseAction(num: number) {
    this.num = this.num - num;
  },
});

export default ExampleStore;
