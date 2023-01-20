import { sleep } from 'k6';
import * as config from "./config-params.js";
import * as scenario_one from "./test-scenario/scenario-one.js";

export const options = config.default.options;
// const pet_owner_login = pet_owner_test.login();
console.log("here")
export default function() {
  const response = scenario_one.test_scenario_one();
  console.log(response);
}