import urls from "/src/pet-owner-config-urls.js";
import http from 'k6/http';
import config from "/src/config-params.js";

const formFailRate = config.formFailRate;
const submitFailRate = config.submitFailRate;

export function login(){
    const login_email = http.get(urls.login_email);
    formFailRate.add(login_email.status !== 200);
};
