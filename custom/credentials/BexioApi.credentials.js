"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BexioApi = void 0;
class BexioApi {
    constructor() {
        this.name = "bexioApi";
        this.displayName = "Bexio API";
        this.documentationUrl = "https://docs.bexio.com/#section/Authentication/API-Tokens";
        this.properties = [
            {
                displayName: "Access Token",
                name: "accessToken",
                type: "string",
                default: "",
            },
        ];
    }
}
exports.BexioApi = BexioApi;
//# sourceMappingURL=BexioApi.credentials.js.map