import { observable, when, action, runInAction } from "mobx";
import axios from "axios";
import { fromPromise } from "mobx-utils";

import UserStore from "./UserStore";

const apiRoot = "https://jsonplaceholder.typicode.com";

export default class BaseStore {
  @observable users;

  constructor() {
    new UserStore(this);
  }

  @action
  test = async params => {
    let res = await axios.get(`${apiRoot}/users`);
    runInAction("test", () => {
      if (res) {
        this.users = res;
        //do something
      }
    });
  };
}
