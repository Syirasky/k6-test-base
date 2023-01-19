import * as config from "./config-params.js";

// getting the form api 
const urls = {
    login_email: `${config.default.baseUrl}/v5/loginemail?from=k6`,
};

export default {
    urls
};
