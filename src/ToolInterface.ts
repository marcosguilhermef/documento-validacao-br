export interface ToolInterface<T extends string | boolean, B>{
    parameter?: string | B;
    execute() : T;
}