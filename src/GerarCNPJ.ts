import { ToolInterface } from "./ToolInterface";

export class GerarCNPJ implements ToolInterface<string,null>{
    parameter?: string;
    
    constructor(regex : string = ''){
        this.parameter = regex;
    }
    
    public execute(): string {
        return '977.757.462-20'
    }

}