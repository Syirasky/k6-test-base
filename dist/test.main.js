(()=>{"use strict";var e={n:o=>{var r=o&&o.__esModule?()=>o.default:()=>o;return e.d(r,{a:r}),r},d:(o,r)=>{for(var t in r)e.o(r,t)&&!e.o(o,t)&&Object.defineProperty(o,t,{enumerable:!0,get:r[t]})},o:(e,o)=>Object.prototype.hasOwnProperty.call(e,o),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},o={};e.r(o),e.d(o,{default:()=>u,options:()=>s}),require("k6");const r=require("k6/metrics"),t={baseUrl:"http://localhost/myapp",formFailRate:new r.Rate("failed form fetches"),submitFailRate:new r.Rate("failed form submits"),options:{vus:1,iterations:1,duration:"10s",thresholds:{"failed form submits":["rate<0.1"],"failed form fetches":["rate<0.1"],http_req_duration:["p(95)<400"]}}},l={urls:{login_email:"".concat(t.baseUrl,"/v5/loginemail?from=k6")}},a=require("k6/http");var n=e.n(a),i=t.formFailRate;console.log("executing login");var s=t.options;function u(){var e=function(e,o){var r=function(e,o){console.log(e),console.log(o);var r=n().post(l.urls.login_email);return i.add(200!==r.status),r}(e,o);return r}("hello","world");console.log(e)}console.log("here");var d=exports;for(var f in o)d[f]=o[f];o.__esModule&&Object.defineProperty(d,"__esModule",{value:!0})})();
//# sourceMappingURL=test.main.js.map