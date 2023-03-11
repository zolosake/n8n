"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fieldsItem = [
    {
        displayName: "Article Id",
        name: "articleId",
        type: "number",
        required: true,
        default: 1,
        displayOptions: {
            show: {
                resource: ["article"],
                operation: ["update", "delete"],
            },
        },
        placeholder: "1",
        description: "Article Id",
    },
    {
        displayName: "Article Type Id",
        name: "articleTypeId",
        type: "number",
        required: false,
        default: 1,
        displayOptions: {
            show: {
                resource: ["article"],
                operation: ["create", "update"],
            },
        },
        placeholder: "1",
        description: "Use the value 1 for physical products or 2 for services.",
    },
    {
        displayName: "Intern Code",
        name: "internCode",
        type: "string",
        required: true,
        default: "",
        displayOptions: {
            show: {
                resource: ["article"],
                operation: ["create", "update"],
            },
        },
        placeholder: "Intern Code",
        description: "Intern Code (sku)",
    },
    {
        displayName: "Intern Name",
        name: "internName",
        type: "string",
        required: true,
        default: "",
        displayOptions: {
            show: {
                resource: ["article"],
                operation: ["create", "update"],
            },
        },
        placeholder: "Intern Name",
        description: "Intern Name (product price)",
    },
    {
        displayName: "Intern Description",
        name: "internDescription",
        type: "string",
        required: false,
        default: "",
        displayOptions: {
            show: {
                resource: ["article"],
                operation: ["create", "update"],
            },
        },
        placeholder: "Intern Description",
        description: "Intern Description (product desc)",
    },
    {
        displayName: "Purchase Price",
        name: "purchasePrice",
        type: "number",
        required: false,
        default: 0,
        displayOptions: {
            show: {
                resource: ["article"],
                operation: ["create", "update"],
            },
        },
        placeholder: "0.00",
        description: "Purchase Price",
    },
    {
        displayName: "Sale Price",
        name: "salePrice",
        type: "number",
        required: false,
        default: 0,
        displayOptions: {
            show: {
                resource: ["article"],
                operation: ["create", "update"],
            },
        },
        placeholder: "0.00",
        description: "Sale Price",
    },
    {
        displayName: "Purchase Total",
        name: "purchaseTotal",
        type: "number",
        required: false,
        default: 0,
        displayOptions: {
            show: {
                resource: ["article"],
                operation: ["create", "update"],
            },
        },
        placeholder: "0.00",
        description: "Purchase Total",
    },
    {
        displayName: "Sale Total",
        name: "saleTotal",
        type: "number",
        required: false,
        default: 0,
        displayOptions: {
            show: {
                resource: ["article"],
                operation: ["create", "update"],
            },
        },
        placeholder: "0.00",
        description: "Sale Total",
    },
    {
        displayName: "Unit Id",
        name: "unitId",
        type: "number",
        required: false,
        default: 1,
        displayOptions: {
            show: {
                resource: ["article"],
                operation: ["create", "update"],
            },
        },
        placeholder: "1",
        description: "Reference a unit object.",
    },
    {
        displayName: "Is Stock",
        name: "isStock",
        type: "boolean",
        required: true,
        default: true,
        displayOptions: {
            show: {
                resource: ["article"],
                operation: ["create", "update"],
            },
        },
        placeholder: "true",
        description: "Is Stock",
    },
    {
        displayName: "Stock Nr",
        name: "stockNr",
        type: "number",
        required: false,
        default: 0,
        displayOptions: {
            show: {
                resource: ["article"],
                operation: ["create", "update"],
            },
        },
        placeholder: "0",
        description: "Please note that the stock number can only be set if no bookings for this product have been made.",
    },
    {
        displayName: "Stock Min Nr",
        name: "stockMinNr",
        type: "number",
        required: true,
        default: 0,
        displayOptions: {
            show: {
                resource: ["article"],
                operation: ["create", "update"],
            },
        },
        placeholder: "0",
        description: "Stock Min Nr",
    },
    {
        displayName: "Width",
        name: "width",
        type: "number",
        required: false,
        default: 0,
        displayOptions: {
            show: {
                resource: ["article"],
                operation: ["create", "update"],
            },
        },
        placeholder: "0",
        description: "Width",
    },
    {
        displayName: "Height",
        name: "height",
        type: "number",
        required: false,
        default: 0,
        displayOptions: {
            show: {
                resource: ["article"],
                operation: ["create", "update"],
            },
        },
        placeholder: "0",
        description: "Height",
    },
    {
        displayName: "Weight",
        name: "weight",
        type: "number",
        required: false,
        default: 0,
        displayOptions: {
            show: {
                resource: ["article"],
                operation: ["create", "update"],
            },
        },
        placeholder: "0",
        description: "Weight",
    },
    {
        displayName: "Volume",
        name: "volume",
        type: "number",
        required: false,
        default: 0,
        displayOptions: {
            show: {
                resource: ["article"],
                operation: ["create", "update"],
            },
        },
        placeholder: "0",
        description: "Volume",
    },
    {
        displayName: "Html Text",
        name: "htmlText",
        type: "string",
        required: false,
        default: "",
        displayOptions: {
            show: {
                resource: ["article"],
                operation: ["create", "update"],
            },
        },
        placeholder: "Html Text",
        description: "Html Text",
    },
    {
        displayName: "Delivery Price",
        name: "deliveryPrice",
        type: "number",
        required: false,
        default: 0,
        displayOptions: {
            show: {
                resource: ["article"],
                operation: ["create", "update"],
            },
        },
        placeholder: "0",
        description: "Delivery Price",
    },
];
exports.default = fieldsItem;
//# sourceMappingURL=FieldsItem.js.map