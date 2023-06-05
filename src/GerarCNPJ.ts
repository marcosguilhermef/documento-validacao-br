import { ToolInterface } from "./ToolInterface";

export class GerarCNPJ implements ToolInterface<string,null>{
    parameter?: string;

    /**
     * Classe responsável em gerar o CNPJ.
     * @constructor
     * @param {string} regex - Mascara. Serve para formatar o CNPJ para diferentes formatações. À critério do pogramador
     */
    
    constructor(regex : string = ''){
        this.parameter = regex;
    }
    
    /** Hook responsável em ativar a função de geraão. */
    public execute(): string {
        return '977.757.462-20'
    }
    
    private gerenateSeed(x: number) : number{
        return Math.round(Math.random() * x);
    }

    private round(x: number, y: number): number{
        return Math.round(x - Math.floor(x / y) * y)
    }

    private sum(x: number[]){
        return x.slice().reverse().reduce((e, i, a) => e + i * (a + 2), 0);
    }

    private generate() : string{
        const numbers = [];

        while (numbers.length < 12) {
            numbers[numbers.length] = this.gerenateSeed(9);
        }
    
        while (numbers.length < 11) {
            let last: number = 11 - this.round(this.sum(numbers), 11);
    
            if (last > 9) {
                last = 0;
            }
    
            numbers[numbers.length] = last;
        }
    
        const result = numbers.join('');

        return result;
    }

    private generateWithMask(cpf: string ,mask: string = 'xxx.xxx.xxx-xx'){
        if (!mask) {
            return cpf;
        }
    
        let regex: any = mask.match(new RegExp('x', 'g'))
        
        const placeholderRegex = new RegExp('x');
        for (let i = 0; i < 11; i++) {
            mask = mask.replace(placeholderRegex, cpf[i]);
        }
    
        return mask;

    }
    

}