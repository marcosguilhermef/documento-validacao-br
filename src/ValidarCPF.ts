export class ValidarCPF implements ToolInterface<boolean>{
    parameter?: string;
    
    constructor(cpf : string = ''){
        this.parameter = cpf;
    }
    
    public execute(): boolean {
        return true
    }

}