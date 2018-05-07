import { observable, when, action, runInAction } from "mobx";
import axios from "axios";
import { fromPromise } from "mobx-utils";

const apiRoot = "https://jsonplaceholder.typicode.com";

export default class BaseStore {
  @observable users;
}
