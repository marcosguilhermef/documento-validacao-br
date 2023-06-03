import { ToolInterface } from "./ToolInterface";
export declare class ValidarCNPJ implements ToolInterface<boolean> {
    parameter?: string;
    constructor(cnpj?: string);
    execute(): boolean;
}
