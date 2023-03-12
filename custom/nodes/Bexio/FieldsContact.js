"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fieldsContact = [
    {
        displayName: "Contact Id",
        name: "contactId",
        type: "number",
        required: true,
        default: 0,
        displayOptions: {
            show: {
                resource: ["contact"],
                operation: ["update"],
            },
        },
        placeholder: "0",
        description: "Contact Id",
    },
    {
        displayName: "Nr",
        name: "nr",
        type: "number",
        required: false,
        default: 111222333000,
        displayOptions: {
            show: {
                resource: ["contact"],
                operation: ["create"],
            },
        },
        placeholder: "111222333000",
        description: "The custom contact number.",
    },
    {
        displayName: "Contact Type Id",
        name: "contactTypeId",
        type: "number",
        required: true,
        default: 2,
        displayOptions: {
            show: {
                resource: ["contact"],
                operation: ["create", "update"],
            },
        },
        placeholder: "2",
        description: "Use 1 for corporations or 2 for individuals. Defaults to 2.",
    },
    {
        displayName: "Last Name / Corporate Name",
        name: "name1",
        type: "string",
        required: true,
        default: "",
        displayOptions: {
            show: {
                resource: ["contact"],
                operation: ["create", "update"],
            },
        },
        placeholder: "Name",
        description: "Use for the corporate name when the contact type is 1, otherwise for the last name of a person.",
    },
    {
        displayName: "First Name / Corporate Addition",
        name: "name2",
        type: "string",
        required: false,
        default: "",
        displayOptions: {
            show: {
                resource: ["contact"],
                operation: ["create", "update"],
            },
        },
        placeholder: "Name",
        description: "Use for the corporate addition when the contact type is 1, otherwise for the first name of a person.",
    },
    {
        displayName: "Salutation Id",
        name: "salutationId",
        type: "number",
        required: false,
        default: 1,
        displayOptions: {
            show: {
                resource: ["contact"],
                operation: ["create", "update"],
            },
        },
        placeholder: "1",
        description: "Reference a salutation object.",
    },
    {
        displayName: "Title Id",
        name: "titleId",
        type: "number",
        required: false,
        default: 1,
        displayOptions: {
            show: {
                resource: ["contact"],
                operation: ["create", "update"],
            },
        },
        placeholder: "1",
        description: "Reference a title object.",
    },
    {
        displayName: "Birthday",
        name: "birthday",
        type: "string",
        required: false,
        default: "",
        displayOptions: {
            show: {
                resource: ["contact"],
                operation: ["create", "update"],
            },
        },
        placeholder: "yyyy-mm-dd",
        description: "Birthday",
    },
    {
        displayName: "Address",
        name: "address",
        type: "string",
        required: false,
        default: "",
        displayOptions: {
            show: {
                resource: ["contact"],
                operation: ["create", "update"],
            },
        },
        placeholder: "Address",
        description: "Address",
    },
    {
        displayName: "Postcode",
        name: "postcode",
        type: "string",
        required: false,
        default: "",
        displayOptions: {
            show: {
                resource: ["contact"],
                operation: ["create", "update"],
            },
        },
        placeholder: "Postcode",
        description: "Postcode",
    },
    {
        displayName: "City",
        name: "city",
        type: "string",
        required: false,
        default: "",
        displayOptions: {
            show: {
                resource: ["contact"],
                operation: ["create", "update"],
            },
        },
        placeholder: "City",
        description: "City",
    },
    {
        displayName: "Country Id",
        name: "countryId",
        type: "number",
        required: false,
        default: 1,
        displayOptions: {
            show: {
                resource: ["contact"],
                operation: ["create", "update"],
            },
        },
        placeholder: "1",
        description: "References a country object.",
    },
    {
        displayName: "Email",
        name: "email",
        type: "string",
        required: false,
        default: "",
        displayOptions: {
            show: {
                resource: ["contact"],
                operation: ["create", "update"],
            },
        },
        placeholder: "office@example.org",
        description: "References a country object.",
    },
    {
        displayName: "Phone Fixed",
        name: "phoneFixed",
        type: "string",
        required: false,
        default: "",
        displayOptions: {
            show: {
                resource: ["contact"],
                operation: ["create", "update"],
            },
        },
        placeholder: "",
        description: "Phone Fixed",
    },
    {
        displayName: "Phone Mobile",
        name: "phoneMobile",
        type: "string",
        required: false,
        default: "",
        displayOptions: {
            show: {
                resource: ["contact"],
                operation: ["create", "update"],
            },
        },
        placeholder: "",
        description: "Phone Mobile",
    },
    {
        displayName: "Remarks",
        name: "remarks",
        type: "string",
        required: false,
        default: "",
        displayOptions: {
            show: {
                resource: ["contact"],
                operation: ["create", "update"],
            },
        },
        placeholder: "",
        description: "Remarks",
    },
];
exports.default = fieldsContact;
//# sourceMappingURL=FieldsContact.js.map