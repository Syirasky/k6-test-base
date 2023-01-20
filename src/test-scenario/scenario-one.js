// scenario one is user tried to login and browse the listing
import * as login_module from '../module-one/login.js';

export function test_scenario_one(param1,param2) {
    const response = login_module.login(param1,param2);
    return response;
}