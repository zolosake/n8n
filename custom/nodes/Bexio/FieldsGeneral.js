"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fieldsGeneral = [
    {
        displayName: "Language Id",
        name: "languageId",
        type: "number",
        required: false,
        default: 1,
        displayOptions: {
            show: {
                resource: ["contact", "kb_order"],
                operation: ["create", "update"],
            },
        },
        placeholder: "1",
        description: "Reference a language object.",
    },
    {
        displayName: "Currency Id",
        name: "currencyId",
        type: "number",
        required: false,
        default: 1,
        displayOptions: {
            show: {
                resource: ["article", "kb_order"],
                operation: ["create", "update"],
            },
        },
        placeholder: "1",
        description: "Reference a currency object.",
    },
    {
        displayName: "User Id",
        name: "userId",
        type: "number",
        required: true,
        default: 1,
        displayOptions: {
            show: {
                resource: ["contact", "article", "kb_order"],
                operation: ["create", "update"],
            },
        },
        placeholder: "1",
        description: "The User Id.",
    },
    {
        displayName: "Owner Id",
        name: "ownerId",
        type: "number",
        required: true,
        default: 1,
        displayOptions: {
            show: {
                resource: ["contact"],
                operation: ["create", "update"],
            },
        },
        placeholder: "1",
        description: "The Owner Id.",
    },
];
exports.default = fieldsGeneral;
//# sourceMappingURL=FieldsGeneral.js.map