import { sleep } from 'k6';
import * as config from "./config-params.js";
import * as scenario_one from "./test-scenario/scenario-one.js";

export const options = config.default.options;

export default function() {
  const response = scenario_one.test_scenario_one("hello","world");
  console.log(response);
}