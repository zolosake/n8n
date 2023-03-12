"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fieldsSearch = [
    {
        displayName: "Item Id",
        name: "itemId",
        type: "number",
        required: false,
        default: 0,
        displayOptions: {
            show: {
                resource: ["address"],
                operation: ["search"],
            },
        },
        placeholder: "0",
        description: "Item Id",
    },
    {
        displayName: "Limit",
        name: "limit",
        type: "number",
        required: false,
        default: 50,
        displayOptions: {
            show: {
                operation: ["search"],
            },
        },
        placeholder: "50",
        description: "Limit the number of results (max is 1000).",
    },
    {
        displayName: "Offset",
        name: "offset",
        type: "number",
        required: false,
        default: 0,
        displayOptions: {
            show: {
                operation: ["search"],
            },
        },
        placeholder: "0",
        description: "Skip over a number of elements by specifying an offset value for the query.",
    },
    {
        displayName: "Order by",
        name: "orderBy",
        type: "string",
        required: false,
        default: "id",
        displayOptions: {
            show: {
                operation: ["search"],
            },
        },
        placeholder: "id_desc, updated_at",
        description: "Defines the order of the results. Multiple sort parameters can be combined by using a comma separator. _asc and _desc can be appended to any parameter to either sort ascending (default) or descending.",
    },
    {
        displayName: "Field",
        name: "field",
        type: "string",
        required: true,
        default: "",
        displayOptions: {
            show: {
                operation: ["search"],
            },
        },
        placeholder: "field",
        description: "Field which should be search over.",
    },
    {
        displayName: "Value",
        name: "value",
        type: "string",
        required: true,
        default: "",
        displayOptions: {
            show: {
                operation: ["search"],
            },
        },
        placeholder: "value",
        description: "Value to search for.",
    },
    {
        displayName: "Criteria",
        name: "criteria",
        type: "string",
        required: false,
        default: "equal",
        displayOptions: {
            show: {
                operation: ["search"],
            },
        },
        placeholder: "equal",
        description: 'Criteria for search: "=" "equal" "!=" "not_equal" ">" "greater_than" ">=" "greater_equal" "<" "less_than" "<=" "less_equal" "like" "not_like" "is_null" "not_null" "in" "not_in"',
    },
];
exports.default = fieldsSearch;
//# sourceMappingURL=FieldsSearch.js.map