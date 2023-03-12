"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bexioApiRequest = void 0;
async function bexioApiRequest(method, endpoint, body, query = {}, headers, option = {}) {
    const options = {
        headers,
        method,
        qs: query,
        body,
        uri: endpoint,
        json: true,
    };
    if (!Object.keys(body).length) {
        delete options.body;
    }
    Object.assign(options, option);
    const authenticationMethod = this.getNodeParameter("authentication", 0);
    try {
        if (authenticationMethod === "accessToken") {
            const credentials = (await this.getCredentials("bexioApi"));
            options.headers["Accept"] = "application/json";
            options.headers["Content-Type"] = "application/json";
            options.headers["Authorization"] = `Bearer ${credentials.accessToken}`;
            return await this.helpers.request(options);
        }
        else {
            throw new Error("This node supports access tokens only. OAuth2 is not implemented yet.");
        }
    }
    catch (error) {
        if (error.statusCode === 401) {
            throw new Error("The credentials for Bexio are not valid!");
        }
        if (error.error && error.error.error_summary) {
            throw new Error(`Bexio error response [${error.statusCode}]: ${error.error.error_summary}`);
        }
        throw error;
    }
}
exports.bexioApiRequest = bexioApiRequest;
//# sourceMappingURL=GenericFunctions.js.map