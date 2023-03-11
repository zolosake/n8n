"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fieldsOrder = [
    {
        displayName: "Order Id",
        name: "orderId",
        type: "number",
        required: true,
        default: 0,
        displayOptions: {
            show: {
                resource: ["kb_order"],
                operation: ["update"],
            },
        },
        placeholder: "0",
        description: "Order Id",
    },
    {
        displayName: "Title",
        name: "title",
        type: "string",
        required: false,
        default: "",
        displayOptions: {
            show: {
                resource: ["kb_order"],
                operation: ["create"],
            },
        },
        placeholder: "Title",
        description: "Title",
    },
    {
        displayName: "Contact Id",
        name: "contactId",
        type: "number",
        required: false,
        default: 1,
        displayOptions: {
            show: {
                resource: ["kb_order"],
                operation: ["create"],
            },
        },
        placeholder: "1",
        description: "References a contact object.",
    },
    {
        displayName: "Contact Sub Id",
        name: "contactSubId",
        type: "number",
        required: false,
        default: 1,
        displayOptions: {
            show: {
                resource: ["kb_order"],
                operation: ["create"],
            },
        },
        placeholder: "1",
        description: "References a contact object.",
    },
    {
        displayName: "Payment Type Id",
        name: "paymentTypeId",
        type: "number",
        required: false,
        default: 1,
        displayOptions: {
            show: {
                resource: ["kb_order"],
                operation: ["create"],
            },
        },
        placeholder: "1",
        description: "Reference a payment type object.",
    },
    {
        displayName: "MwSt Type",
        name: "mwstType",
        type: "number",
        required: false,
        default: 0,
        displayOptions: {
            show: {
                resource: ["kb_order"],
                operation: ["create"],
            },
        },
        placeholder: "0",
        description: "Use 0 for including, 1 for excluding or 2 for tax exemption.",
    },
    {
        displayName: "MwSt Is Net",
        name: "mwstIsNet",
        type: "boolean",
        required: false,
        default: false,
        displayOptions: {
            show: {
                resource: ["kb_order"],
                operation: ["create"],
            },
        },
        placeholder: "false",
        description: "This value affects the total if the field mwst_type has been set to 0. false = Taxes are included in the total, true = Taxes will be added to the total.",
    },
    {
        displayName: "Show Position Taxes",
        name: "showPositionTaxes",
        type: "boolean",
        required: false,
        default: true,
        displayOptions: {
            show: {
                resource: ["kb_order"],
                operation: ["create"],
            },
        },
        placeholder: "true",
        description: "Show Position Taxes",
    },
    {
        displayName: "Delivery Address Type",
        name: "deliveryAddressType",
        type: "number",
        required: false,
        default: 1,
        displayOptions: {
            show: {
                resource: ["kb_order"],
                operation: ["create", "update"],
            },
        },
        placeholder: "1",
        description: "Delivery Address Type",
    },
    {
        displayName: "Positions",
        name: "positions",
        type: "json",
        required: false,
        default: [],
        displayOptions: {
            show: {
                resource: ["kb_order"],
                operation: ["create"],
            },
        },
        description: "Positions",
    },
];
exports.default = fieldsOrder;
//# sourceMappingURL=FieldsOrder.js.map