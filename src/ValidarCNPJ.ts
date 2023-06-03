import { ToolInterface } from "./ToolInterface";

export class ValidarCNPJ implements ToolInterface<boolean>{
    parameter?: string;
    
    constructor(cnpj : string = ''){
        this.parameter = cnpj;
    }
    
    public execute(): boolean {
        return true
    }

}