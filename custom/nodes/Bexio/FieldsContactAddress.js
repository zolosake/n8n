"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fieldsContactAddress = [
    {
        displayName: "Contact Id",
        name: "addressContactId",
        type: "number",
        required: true,
        default: 0,
        displayOptions: {
            show: {
                resource: ["address"],
                operation: ["create", "update"],
            },
        },
        placeholder: "0",
        description: "Contact Id",
    },
    {
        displayName: "Address Id",
        name: "addressId",
        type: "number",
        required: true,
        default: 0,
        displayOptions: {
            show: {
                resource: ["address"],
                operation: ["update"],
            },
        },
        placeholder: "0",
        description: "Address Id",
    },
    {
        displayName: "Name",
        name: "addressName",
        type: "string",
        required: false,
        default: "",
        displayOptions: {
            show: {
                resource: ["address"],
                operation: ["create", "update"],
            },
        },
        placeholder: "Name",
        description: "Name",
    },
    {
        displayName: "Address",
        name: "addressAddress",
        type: "string",
        required: false,
        default: "",
        displayOptions: {
            show: {
                resource: ["address"],
                operation: ["create", "update"],
            },
        },
        placeholder: "Address",
        description: "Address",
    },
    {
        displayName: "Postcode",
        name: "addressPostcode",
        type: "string",
        required: false,
        default: "",
        displayOptions: {
            show: {
                resource: ["address"],
                operation: ["create", "update"],
            },
        },
        placeholder: "Postcode",
        description: "Postcode",
    },
    {
        displayName: "City",
        name: "addressCity",
        type: "string",
        required: false,
        default: "",
        displayOptions: {
            show: {
                resource: ["address"],
                operation: ["create", "update"],
            },
        },
        placeholder: "City",
        description: "City",
    },
    {
        displayName: "Country Id",
        name: "addressCountryId",
        type: "number",
        required: false,
        default: 1,
        displayOptions: {
            show: {
                resource: ["address"],
                operation: ["create", "update"],
            },
        },
        placeholder: "1",
        description: "Reference a country object.",
    },
    {
        displayName: "Subject",
        name: "addressSubject",
        type: "string",
        required: false,
        default: "",
        displayOptions: {
            show: {
                resource: ["address"],
                operation: ["create", "update"],
            },
        },
        placeholder: "Subject",
        description: "Subject",
    },
    {
        displayName: "Description",
        name: "addressDescription",
        type: "string",
        required: false,
        default: "",
        displayOptions: {
            show: {
                resource: ["address"],
                operation: ["create", "update"],
            },
        },
        placeholder: "Description",
        description: "Description",
    },
];
exports.default = fieldsContactAddress;
//# sourceMappingURL=FieldsContactAddress.js.map