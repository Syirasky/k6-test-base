// scenario one is user tried to login and browse the listing
import * as login_module from '../module-one/login.js';

export function test_scenario_one() {
    const response = login_module.login();
    return response;
}