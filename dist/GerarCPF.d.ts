import { ToolInterface } from "./ToolInterface";
export declare class GerarCPF implements ToolInterface<string> {
    parameter?: string;
    constructor(regex?: string);
    execute(): string;
    private gerenateSeed;
    private round;
    private sum;
    private generate;
    private generateWithMask;
}
