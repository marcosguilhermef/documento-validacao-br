export interface ToolInterface<T extends string | boolean>{
    parameter?: string;
    execute() : T;
}