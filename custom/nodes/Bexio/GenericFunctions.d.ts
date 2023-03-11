import { IExecuteFunctions, IHookFunctions } from "n8n-core";
import { IDataObject } from "n8n-workflow";
export declare function bexioApiRequest(this: IHookFunctions | IExecuteFunctions, method: string, endpoint: string, body: object, query?: IDataObject, headers?: object, option?: IDataObject): Promise<any>;
