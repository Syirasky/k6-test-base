import * as config_urls from "../module-one/config-urls.js";
import http from 'k6/http';
import { Rate}  from 'k6/metrics';

const email = "user1@mail.com";
const password = "asdqwe";

const formFailRate = new Rate('failed form fetches');
const submitFailRate = new Rate('failed form submits');

console.log("executing login");
export function login(param1,param2){
    console.log(param1);
    console.log(param2);
    const login_email = http.post(config_urls.default.urls.login_email);
    formFailRate.add(login_email.status !== 200);
    return login_email;
};
