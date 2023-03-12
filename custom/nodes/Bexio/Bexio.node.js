"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bexio = void 0;
const GenericFunctions_1 = require("./GenericFunctions");
const FieldsContact_1 = __importDefault(require("./FieldsContact"));
const FieldsContactAddress_1 = __importDefault(require("./FieldsContactAddress"));
const FieldsItem_1 = __importDefault(require("./FieldsItem"));
const FieldsOrder_1 = __importDefault(require("./FieldsOrder"));
const FieldsGeneral_1 = __importDefault(require("./FieldsGeneral"));
const FieldsSearch_1 = __importDefault(require("./FieldsSearch"));
class Bexio {
    constructor() {
        this.description = {
            displayName: "Bexio",
            name: "bexio",
            icon: "file:bexio.png",
            group: ["input"],
            version: 1,
            description: "Access data on Bexio.",
            defaults: {
                name: "Bexio",
                color: "#BADC01",
            },
            inputs: ["main"],
            outputs: ["main"],
            credentials: [
                {
                    name: "bexioApi",
                    required: true,
                    displayOptions: {
                        show: {
                            authentication: ["accessToken"],
                        },
                    },
                },
            ],
            properties: [
                {
                    displayName: "Authentication",
                    name: "authentication",
                    type: "options",
                    options: [
                        {
                            name: "Access Token",
                            value: "accessToken",
                        },
                    ],
                    default: "accessToken",
                    description: "Means of authenticating with the service. (OAuth2 not implemented yet)",
                },
                {
                    displayName: "Resource",
                    name: "resource",
                    type: "options",
                    options: [
                        { name: "Contact", value: "contact" },
                        { name: "Address", value: "address" },
                        { name: "Item", value: "article" },
                        { name: "Order", value: "kb_order" },
                    ],
                    default: "",
                    description: "The resource to operate on.",
                },
                {
                    displayName: "Operation",
                    name: "operation",
                    type: "options",
                    displayOptions: {
                        show: {
                            resource: ["contact"],
                        },
                    },
                    options: [
                        {
                            name: "Create",
                            value: "create",
                            description: "Create a contact",
                        },
                        {
                            name: "Update",
                            value: "update",
                            description: "Update a contact.",
                        },
                        {
                            name: "Search",
                            value: "search",
                            description: "Search contacts.",
                        },
                    ],
                    default: "create",
                    description: "The operation to perform.",
                },
                {
                    displayName: "Operation",
                    name: "operation",
                    type: "options",
                    displayOptions: {
                        show: {
                            resource: ["address"],
                        },
                    },
                    options: [
                        {
                            name: "Create",
                            value: "create",
                            description: "Create an address",
                        },
                        {
                            name: "Update",
                            value: "update",
                            description: "Update an address.",
                        },
                        {
                            name: "Search",
                            value: "search",
                            description: "Search an address.",
                        },
                    ],
                    default: "create",
                    description: "The operation to perform.",
                },
                {
                    displayName: "Operation",
                    name: "operation",
                    type: "options",
                    displayOptions: {
                        show: {
                            resource: ["article"],
                        },
                    },
                    options: [
                        {
                            name: "Create",
                            value: "create",
                            description: "Create an item",
                        },
                        {
                            name: "Update",
                            value: "update",
                            description: "Update an item.",
                        },
                        {
                            name: "Search",
                            value: "search",
                            description: "Search items.",
                        },
                        {
                            name: "Delete",
                            value: "delete",
                            description: "Delete an item.",
                        },
                    ],
                    default: "create",
                    description: "The operation to perform.",
                },
                {
                    displayName: "Operation",
                    name: "operation",
                    type: "options",
                    displayOptions: {
                        show: {
                            resource: ["kb_order"],
                        },
                    },
                    options: [
                        {
                            name: "Create",
                            value: "create",
                            description: "Create an order",
                        },
                        {
                            name: "Update",
                            value: "update",
                            description: "Update an order (delivery_address_type only, atm).",
                        },
                    ],
                    default: "create",
                    description: "The operation to perform.",
                },
                ...FieldsContact_1.default,
                ...FieldsContactAddress_1.default,
                ...FieldsItem_1.default,
                ...FieldsOrder_1.default,
                ...FieldsGeneral_1.default,
                ...FieldsSearch_1.default,
            ],
        };
    }
    async execute() {
        const items = this.getInputData();
        const returnData = [];
        const resource = this.getNodeParameter("resource", 0);
        const operation = this.getNodeParameter("operation", 0);
        let endpoint = "";
        let requestMethod = "";
        let headers = {};
        let query = {};
        let body = {};
        let options;
        for (let itemIndex = 0; itemIndex < items.length; itemIndex++) {
            body = {};
            if (resource === "contact") {
                if (operation === "create") {
                    requestMethod = "POST";
                    endpoint = "https://api.bexio.com/2.0/contact";
                    body = {
                        contact_type_id: this.getNodeParameter("contactTypeId", itemIndex),
                        nr: this.getNodeParameter("nr", itemIndex),
                        name_1: this.getNodeParameter("name1", itemIndex),
                        name_2: this.getNodeParameter("name2", itemIndex),
                        salutation_id: this.getNodeParameter("salutationId", itemIndex),
                        titel_id: this.getNodeParameter("titleId", itemIndex),
                        birthday: this.getNodeParameter("birthday", itemIndex),
                        address: this.getNodeParameter("address", itemIndex),
                        postcode: this.getNodeParameter("postcode", itemIndex),
                        city: this.getNodeParameter("city", itemIndex),
                        country_id: this.getNodeParameter("countryId", itemIndex),
                        mail: this.getNodeParameter("email", itemIndex),
                        phone_fixed: this.getNodeParameter("phoneFixed", itemIndex),
                        phone_mobile: this.getNodeParameter("phoneMobile", itemIndex),
                        remarks: this.getNodeParameter("remarks", itemIndex),
                        language_id: this.getNodeParameter("languageId", itemIndex),
                        user_id: this.getNodeParameter("userId", itemIndex),
                        owner_id: this.getNodeParameter("ownerId", itemIndex),
                    };
                }
                else if (operation === "update") {
                    const contactId = this.getNodeParameter("contactId", itemIndex);
                    requestMethod = "POST";
                    endpoint = `https://api.bexio.com/2.0/contact/${contactId}`;
                    body = {
                        contact_type_id: this.getNodeParameter("contactTypeId", itemIndex),
                        name_1: this.getNodeParameter("name1", itemIndex),
                        name_2: this.getNodeParameter("name2", itemIndex),
                        salutation_id: this.getNodeParameter("salutationId", itemIndex),
                        titel_id: this.getNodeParameter("titleId", itemIndex),
                        birthday: this.getNodeParameter("birthday", itemIndex),
                        address: this.getNodeParameter("address", itemIndex),
                        postcode: this.getNodeParameter("postcode", itemIndex),
                        city: this.getNodeParameter("city", itemIndex),
                        country_id: this.getNodeParameter("countryId", itemIndex),
                        mail: this.getNodeParameter("email", itemIndex),
                        phone_fixed: this.getNodeParameter("phoneFixed", itemIndex),
                        phone_mobile: this.getNodeParameter("phoneMobile", itemIndex),
                        remarks: this.getNodeParameter("remarks", itemIndex),
                        language_id: this.getNodeParameter("languageId", itemIndex),
                        user_id: this.getNodeParameter("userId", itemIndex),
                        owner_id: this.getNodeParameter("ownerId", itemIndex),
                    };
                }
                else if (operation === "search") {
                    requestMethod = "POST";
                    endpoint = "https://api.bexio.com/2.0/contact/search";
                    query.arg = JSON.stringify({
                        limit: this.getNodeParameter("limit", itemIndex),
                        offset: this.getNodeParameter("offset", itemIndex),
                        order_by: this.getNodeParameter("orderBy", itemIndex),
                    });
                    body = [
                        {
                            field: this.getNodeParameter("field", itemIndex),
                            value: this.getNodeParameter("value", itemIndex),
                            criteria: this.getNodeParameter("criteria", itemIndex),
                        },
                    ];
                }
            }
            else if (resource === "address") {
                if (operation === "create") {
                    let addressContactId = this.getNodeParameter("addressContactId", itemIndex);
                    requestMethod = "POST";
                    endpoint = `https://api.bexio.com/2.0/contact/${addressContactId}/additional_address`;
                    body = {
                        name: this.getNodeParameter("addressName", itemIndex),
                        address: this.getNodeParameter("addressAddress", itemIndex),
                        postcode: this.getNodeParameter("addressPostcode", itemIndex),
                        city: this.getNodeParameter("addressCity", itemIndex),
                        country_id: this.getNodeParameter("addressCountryId", itemIndex),
                        subject: this.getNodeParameter("addressSubject", itemIndex),
                        description: this.getNodeParameter("addressDescription", itemIndex),
                    };
                }
                else if (operation === "update") {
                    let addressContactId = this.getNodeParameter("addressContactId", itemIndex);
                    const addressId = this.getNodeParameter("addressId", itemIndex);
                    requestMethod = "POST";
                    endpoint = `https://api.bexio.com/2.0/contact/${addressContactId}/additional_address/${addressId}`;
                    body = {
                        name: this.getNodeParameter("addressName", itemIndex),
                        address: this.getNodeParameter("addressAddress", itemIndex),
                        postcode: this.getNodeParameter("addressPostcode", itemIndex),
                        city: this.getNodeParameter("addressCity", itemIndex),
                        country_id: this.getNodeParameter("addressCountryId", itemIndex),
                        subject: this.getNodeParameter("addressSubject", itemIndex),
                        description: this.getNodeParameter("addressDescription", itemIndex),
                    };
                }
                else if (operation === "search") {
                    let addressContactId = this.getNodeParameter("itemId", itemIndex);
                    requestMethod = "POST";
                    endpoint = `https://api.bexio.com/2.0/contact/${addressContactId}/additional_address/search`;
                    query.arg = JSON.stringify({
                        limit: this.getNodeParameter("limit", itemIndex),
                        offset: this.getNodeParameter("offset", itemIndex),
                        order_by: this.getNodeParameter("orderBy", itemIndex),
                    });
                    body = [
                        {
                            field: this.getNodeParameter("field", itemIndex),
                            value: this.getNodeParameter("value", itemIndex),
                            criteria: this.getNodeParameter("criteria", itemIndex),
                        },
                    ];
                }
            }
            else if (resource === "article") {
                if (operation === "create") {
                    requestMethod = "POST";
                    endpoint = "https://api.bexio.com/2.0/article";
                    body = {
                        article_type_id: this.getNodeParameter("articleTypeId", itemIndex),
                        intern_code: this.getNodeParameter("internCode", itemIndex),
                        intern_name: this.getNodeParameter("internName", itemIndex),
                        intern_description: this.getNodeParameter("internDescription", itemIndex),
                        purchase_price: this.getNodeParameter("purchasePrice", itemIndex),
                        sale_price: this.getNodeParameter("salePrice", itemIndex),
                        purchase_total: this.getNodeParameter("purchaseTotal", itemIndex),
                        sale_total: this.getNodeParameter("saleTotal", itemIndex),
                        currency_id: this.getNodeParameter("currencyId", itemIndex),
                        unit_id: this.getNodeParameter("unitId", itemIndex),
                        is_stock: this.getNodeParameter("isStock", itemIndex),
                        stock_nr: this.getNodeParameter("stockNr", itemIndex),
                        stock_min_nr: this.getNodeParameter("stockMinNr", itemIndex),
                        width: this.getNodeParameter("width", itemIndex),
                        height: this.getNodeParameter("height", itemIndex),
                        weight: this.getNodeParameter("weight", itemIndex),
                        volume: this.getNodeParameter("volume", itemIndex),
                        delivery_price: this.getNodeParameter("deliveryPrice", itemIndex),
                        user_id: this.getNodeParameter("userId", itemIndex),
                    };
                }
                else if (operation === "update") {
                    const articleId = this.getNodeParameter("articleId", itemIndex);
                    requestMethod = "POST";
                    endpoint = `https://api.bexio.com/2.0/article/${articleId}`;
                    body = {
                        intern_code: this.getNodeParameter("internCode", itemIndex),
                        intern_name: this.getNodeParameter("internName", itemIndex),
                        intern_description: this.getNodeParameter("internDescription", itemIndex),
                        purchase_price: this.getNodeParameter("purchasePrice", itemIndex),
                        sale_price: this.getNodeParameter("salePrice", itemIndex),
                        purchase_total: this.getNodeParameter("purchaseTotal", itemIndex),
                        sale_total: this.getNodeParameter("saleTotal", itemIndex),
                        currency_id: this.getNodeParameter("currencyId", itemIndex),
                        unit_id: this.getNodeParameter("unitId", itemIndex),
                        is_stock: this.getNodeParameter("isStock", itemIndex),
                        stock_min_nr: this.getNodeParameter("stockMinNr", itemIndex),
                        width: this.getNodeParameter("width", itemIndex),
                        height: this.getNodeParameter("height", itemIndex),
                        weight: this.getNodeParameter("weight", itemIndex),
                        volume: this.getNodeParameter("volume", itemIndex),
                        html_text: this.getNodeParameter("htmlText", itemIndex),
                        delivery_price: this.getNodeParameter("deliveryPrice", itemIndex),
                        user_id: this.getNodeParameter("userId", itemIndex),
                    };
                }
                else if (operation === "delete") {
                    const articleId = this.getNodeParameter("articleId", itemIndex);
                    requestMethod = "DELETE";
                    endpoint = `https://api.bexio.com/2.0/article/${articleId}`;
                }
                else if (operation === "search") {
                    requestMethod = "POST";
                    endpoint = "https://api.bexio.com/2.0/article/search";
                    query.arg = JSON.stringify({
                        limit: this.getNodeParameter("limit", itemIndex),
                        offset: this.getNodeParameter("offset", itemIndex),
                        order_by: this.getNodeParameter("orderBy", itemIndex),
                    });
                    body = [
                        {
                            field: this.getNodeParameter("field", itemIndex),
                            value: this.getNodeParameter("value", itemIndex),
                            criteria: this.getNodeParameter("criteria", itemIndex),
                        },
                    ];
                }
            }
            else if (resource === "kb_order") {
                if (operation === "create") {
                    requestMethod = "POST";
                    endpoint = `https://api.bexio.com/2.0/kb_order`;
                    body = {
                        title: this.getNodeParameter("title", itemIndex),
                        contact_id: this.getNodeParameter("contactId", itemIndex),
                        contact_sub_id: this.getNodeParameter("contactSubId", itemIndex),
                        language_id: this.getNodeParameter("languageId", itemIndex),
                        currency_id: this.getNodeParameter("currencyId", itemIndex),
                        payment_type_id: this.getNodeParameter("paymentTypeId", itemIndex),
                        mwst_type: this.getNodeParameter("mwstType", itemIndex),
                        mwst_is_net: this.getNodeParameter("mwstIsNet", itemIndex),
                        show_position_taxes: this.getNodeParameter("showPositionTaxes", itemIndex),
                        delivery_address_type: this.getNodeParameter("deliveryAddressType", itemIndex),
                        positions: this.getNodeParameter("positions", itemIndex),
                        user_id: this.getNodeParameter("userId", itemIndex),
                    };
                }
                else if (operation === "update") {
                    const orderId = this.getNodeParameter("orderId", itemIndex);
                    requestMethod = "POST";
                    endpoint = `https://api.bexio.com/2.0/kb_order/${orderId}`;
                    body = {
                        delivery_address_type: this.getNodeParameter("deliveryAddressType", itemIndex),
                    };
                }
            }
            else {
                throw new Error(`The resource "${resource}" is not implemented yet or not known.`);
            }
            let responseData = await GenericFunctions_1.bexioApiRequest.call(this, requestMethod, endpoint, body, query, headers, options);
            returnData.push(responseData);
        }
        return [this.helpers.returnJsonArray(returnData)];
    }
}
exports.Bexio = Bexio;
//# sourceMappingURL=Bexio.node.js.map