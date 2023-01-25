import * as scenario_one from "./test-scenario/scenario-one.js";
import * as scenario_two from "./test-scenario/scenario-two.js";

// export const options = config.default.options;
export const options = {
  scenarios:{
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
  },
  thresholds: {
    'failed form submits{test_type:api}': ['rate<0.1'],
    'failed form fetches{test_type:api}': ['rate<0.1'],
    'http_req_duration{test_type:api}': ['p(95)<400']
  }
};

export function exec_scenario_one() {
  const response = scenario_one.test_scenario_one("hello","world");
  console.log(response);
}

export function exec_scenario_two() {
  const response = scenario_two.test_scenario_two();
  console.log(response);
}