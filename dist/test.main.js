(()=>{"use strict";var e={n:o=>{var t=o&&o.__esModule?()=>o.default:()=>o;return e.d(t,{a:t}),t},d:(o,t)=>{for(var r in t)e.o(t,r)&&!e.o(o,r)&&Object.defineProperty(o,r,{enumerable:!0,get:t[r]})},o:(e,o)=>Object.prototype.hasOwnProperty.call(e,o),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},o={};e.r(o),e.d(o,{exec_scenario_one:()=>c,exec_scenario_two:()=>l,options:()=>_});const t={urls:{login_email:"".concat("http://localhost/myapp","/v5/loginemail?from=k6")}},r=require("k6/http");var s=e.n(r);const n=require("k6/metrics");var a=new n.Rate("failed form fetches");new n.Rate("failed form submits");const i=require("k6");function c(){var e=function(e,o){var r=function(e,o){console.log("executing login"),console.log(e),console.log(o);var r=s().post(t.urls.login_email);return a.add(200!==r.status),r}(e,o);return r}("hello","world");console.log(e)}function l(){var e,o=(console.log("executing sleep"),(0,i.sleep)(5),e="ok",console.log("executing no sleep"),console.log("received text "+e),"success");console.log(o)}var u={scenario_one:{executor:"per-vu-iterations",exec:"exec_scenario_one",vus:1,iterations:1,maxDuration:"10s",tags:{test_type:"api"}},scenario_two:{executor:"per-vu-iterations",exec:"exec_scenario_two",vus:1,iterations:1,maxDuration:"10s",tags:{test_type:"api"}}},_={scenarios:{},thresholds:{"failed form submits{test_type:api}":["rate<0.1"],"failed form fetches{test_type:api}":["rate<0.1"],"http_req_duration{test_type:api}":["p(95)<400"]}};__ENV.scenario?_.scenarios[__ENV.scenario]=u[__ENV.scenario]:_.scenarios=u;var p=exports;for(var d in o)p[d]=o[d];o.__esModule&&Object.defineProperty(p,"__esModule",{value:!0})})();
//# sourceMappingURL=test.main.js.map