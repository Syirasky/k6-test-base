import * as scenario_one from "./test-scenarios/scenario-one.js";
import * as scenario_two from "./test-scenarios/scenario-two.js";


// this index.js contains multiple scenario. 
// to run a specific scenario k6 run --env scenario=scenario_one
// but since we using webpack to pack all the js we need to run k6 run --env scenario=scenario_one dist/test.main.js


// functions for the scenarios
export function exec_scenario_one() {
  const response = scenario_one.test_scenario_one("hello","world");
  console.log(response);
}
export function exec_scenario_two() {
  const response = scenario_two.test_scenario_two();
  console.log(response);
}

// specify all available scenarios
let scenarios_list = {
  scenario_one:{
    executor: 'per-vu-iterations',
    exec: 'exec_scenario_one',
    vus: 1,
    iterations: 1,
    maxDuration: '10s',
    tags: { test_type : 'api' }
  },
  scenario_two:{
    executor: 'per-vu-iterations',
    exec: 'exec_scenario_two',
    vus: 1,
    iterations: 1,
    maxDuration: '10s',
    tags: { test_type : 'api' }
  }
};

// specify the thresholds here based on the tag
export const options = {
  scenarios: {},
  thresholds: {
    'failed form submits{test_type:api}': ['rate<0.1'],
    'failed form fetches{test_type:api}': ['rate<0.1'],
    'http_req_duration{test_type:api}': ['p(95)<400']
  }
};
// this part where the scenario is selected . do not modify.
if (__ENV.scenario) {
  // Use just a single scenario if `--env scenario=whatever` is used
  options.scenarios[__ENV.scenario] = scenarios_list[__ENV.scenario];
} else {
  // Use all scenarios
  options.scenarios = scenarios_list;
}
