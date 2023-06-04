import { ToolInterface } from "./ToolInterface";

export class ValidarCNPJ implements ToolInterface<boolean, string>{
    parameter: string;

    constructor(cnpj:  string) {
        this.parameter = cnpj;
    }

    public execute(): boolean {
        return this.validate(this.treaty(this.parameter))
    }

    private treaty(value : string){
        return value.replaceAll(/[.\/-]/g,'')
    }

    private validate(value: string) {

        console.log({"teste":value.length})

        if(value.length != 14){
            return false
        }

        const numbers : number []= value.split('').map( e => parseInt(e))

        const items = new Set<number>(numbers)

        if (items.size === 1){
            return false
        }


        const calc = (x) => {
            const slice = numbers.slice(0, x)
            let factor = x - 7
            let sum = 0

            for (let i = x; i >= 1; i--) {
                const n = slice[x - i]
                sum += n * factor--
                if (factor < 2) factor = 9
            }

            const result = 11 - (sum % 11)

            return result > 9 ? 0 : result
        }

        const digits = numbers.slice(12)

        const digit0 = calc(12)
        if (digit0 !== digits[0]) return false

        const digit1 = calc(13)
        return digit1 === digits[1]
    }

}