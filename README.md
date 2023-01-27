# # k6-test-base

This is a demo base structure for k6 functional test with multiple scenario.
This project purpose is to create a base structure for k6 functional test so that it is easy for the developers to have their test script written and tested according to the scenarios and functionality.

## Requirements
Node.JS v12 and above <br>
K6 [Installation (k6.io)](https://k6.io/docs/get-started/installation/)

## Installation

 1. clone the repo
 2. navigate into the cloned project
 3. run ``npm install ``
 4. after everything is done, run ``yarn run test``

 ## Adding new scenario
Example a short scenario here, user want to browse the listing after login.
 1. Create test module
 Create a new test module inside the modules directory, can named it as `module-one` or `module-user` or `module-customer` (anything that is suitable). For the example, we set it as `module-one`.

 2. Create test methods. 
After create a new module, we need to create new method inside the `module-one` directory. Name the method files according to their method name. 
Example, `login` method, we set the method filename as `login.js`

 3. Create test scenario.
After we have all the required methods, can create a new test scenario inside the `test-scenarios` directory. Create a new file and named it anything that is suitable according to the test scenario. For the sake of simplicity inside this example, we name the file as `scenario-one`.

4. Write the scenario.
Example,
```
// scenario one is user tried to login and browse the listing
import * as login_module from '../modules/module-one/login.js';
import * as login_module from '../modules/module-one/browse-listing.js';
export function test_scenario_one(param1,param2) {
    const response = login_module.login(param1,param2);
    // do the logic to process browsing the listing 
    // ... another code goes here
    return response;
}
```

5. Modifying the `index.js`.
Inside the `index.js`, we need to set the import the test-scenario that we have created.
```
import * as scenario_one from "./test-scenarios/scenario-one.js";
```

Create a new function to execute the test scenario.
```
export function exec_scenario_one() {
  const response = scenario_one.test_scenario_one("hello","world");
  console.log(response);
}
```

After that define the scenario inside the `scenario_list`. 
Can read more from here for the parameters. 
https://k6.io/docs/using-k6/scenarios/
```
let scenarios_list = {
  scenario_one:{
    executor: 'per-vu-iterations',
    exec: 'exec_scenario_one',
    vus: 1,
    iterations: 1,
    maxDuration: '10s',
    tags: { test_type : 'api' }
  },
  other_scenarios:{
    executor: 'per-vu-iterations',
    exec: 'exec_other_scenarios',
    vus: 1,
    iterations: 1,
    maxDuration: '10s',
    tags: { test_type : 'api' }
  },
};
```
Specify the options based on the tags specified inside the `scenario_list`. Example tags `test_type:api`. 

```
export const options = {
  scenarios: {},
  thresholds: {
    'failed form submits{test_type:api}': ['rate<0.1'],
    'failed form fetches{test_type:api}': ['rate<0.1'],
    'http_req_duration{test_type:api}': ['p(95)<400']
  }
};
```
6. Run the scripts.
Open terminal and run `yarn run test`. This command `yarn run test` will run the `test` command inside the `package.json` and it will run all the test scenarios.
To run a specific scenario, add `--env scenario=`. Example `yarn run test --env scenario=scenario_one`.

*Overview of the how the test is executed.
We compile our project to a single script. To compile we use `webpack` to build as specified in `webpack.config.js`.*


