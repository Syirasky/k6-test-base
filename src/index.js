import { sleep } from 'k6';
import * as config from "./config-params.js";
import { login } from "./pet-owner.js";

export const options = config.options;
// const pet_owner_login = pet_owner_test.login();
export default function() {
  login();
  sleep(1);
}