(()=>{"use strict";var e={n:t=>{var r=t&&t.__esModule?()=>t.default:()=>t;return e.d(r,{a:r}),r},d:(t,r)=>{for(var o in r)e.o(r,o)&&!e.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:r[o]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};e.r(t),e.d(t,{default:()=>m,options:()=>f});var r={};e.r(r),e.d(r,{Z:()=>i});const o=require("k6"),a=require("k6/metrics"),i={baseUrl:"http://localhost/yii2-api/api/web/",formFailRate:new a.Rate("failed form fetches"),submitFailRate:new a.Rate("failed form submits"),options:{vus:1,iterations:1,duration:"10s",thresholds:{"failed form submits":["rate<0.1"],"failed form fetches":["rate<0.1"],http_req_duration:["p(95)<400"]}}};var l={login_email:"".concat(i.baseUrl,"/v5/loginemail?from=k6")};console.log(l);const s={urls:l},n=require("k6/http");var u=e.n(n),d=i.formFailRate;i.submitFailRate;var f=r.options;function m(){var e;e=u().get(s.login_email),d.add(200!==e.status),(0,o.sleep)(1)}var p=exports;for(var c in t)p[c]=t[c];t.__esModule&&Object.defineProperty(p,"__esModule",{value:!0})})();
//# sourceMappingURL=test.main.js.map