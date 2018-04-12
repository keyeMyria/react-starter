import {
    username,
    password,
    email
} from '@/regex';
export default {
    isUsername(v){
        return username.test(v);
    },
    isPassword(v){
        return password.test(v);
    },
    isEmail(v){
        return email.test(v);
    },
    isString(v){
        return Object.prototype.toString.call(v) == '[object String]';
    },
    isNull(v){
        return Object.prototype.toString.call(v) == '[object Null]';
    },
    isUndefined(v){
        return Object.prototype.toString.call(v) == '[object Undefined]';
    },
    isEmpty(v){
        if(this.isString(v) && v.length == 0){
            return true;
        }
        if(this.isNull(v)){
            return true;
        }
        if(this.isUndefined(v)){
            return true;
        }
        return false;
    },
    decorateBeforeFn(bFn,fn) {
        return function (...args) {
            bFn.apply(this,[this]);
            return fn.apply(this,args);
        }
    },
    decorateAfterFn(fn,aFn) {
        return function (...args) {
            const ret = fn.apply(this,args);
            aFn.apply(this,[this]);
            return ret;
        }
    }
}