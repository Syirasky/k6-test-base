import { sleep } from 'k6';

export function sleep_test(){
    console.log("executing sleep");
    sleep(5);
    return "ok";
};


export function no_sleep_test(text){
    console.log("executing no sleep");
    console.log("received text "+ text);
    return "success";
};

