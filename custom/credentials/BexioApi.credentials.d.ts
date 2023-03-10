import { ICredentialType, NodePropertyTypes } from "n8n-workflow";
export declare class BexioApi implements ICredentialType {
    name: string;
    displayName: string;
    documentationUrl: string;
    properties: {
        displayName: string;
        name: string;
        type: NodePropertyTypes;
        default: string;
    }[];
}
