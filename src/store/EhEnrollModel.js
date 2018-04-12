import { observable, computed, action } from "mobx";

export default class EhEnrollModel {
    @observable user = {};

    @action
    addUser(user) {
        this.user = user;
    }
}
