import { ToolInterface } from "./ToolInterface";
export declare class GerarCNPJ implements ToolInterface<string> {
    parameter?: string;
    constructor(regex?: string);
    execute(): string;
}
