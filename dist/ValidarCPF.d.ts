import { ToolInterface } from "./ToolInterface";
export declare class ValidarCPF implements ToolInterface<boolean> {
    parameter: string;
    role: string;
    constructor(value: string);
    execute(): boolean;
    setParameters(param: string): void;
    private validate;
}
