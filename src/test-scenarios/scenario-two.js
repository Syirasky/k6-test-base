// scenario two is just sleep and no sleep
import * as another_test from '../modules/module-one/another-test.js';

export function test_scenario_two() {
    // execute this test
    const sleep_test_resp = another_test.sleep_test();
    // then execute this test
    const no_sleep_test_resp = another_test.no_sleep_test(sleep_test_resp);
    return no_sleep_test_resp;
}