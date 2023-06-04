import { ToolInterface } from "./ToolInterface";

export class ValidarCPF implements ToolInterface<boolean, null>{
    parameter: string;
    role: string = 'validador'

    constructor(value: string) {
        this.parameter = value;
    }

    execute() {
        return this.validate();
    };

    setParameters(param: string) {
        this.parameter = param;
    };

    private validate() {
        let cpf = this.parameter.replace(/[^0-9]/g, "");

        const numbers = new Set(cpf)

        if (numbers.size === 1) {
            return false
        }

        if (cpf.length !== 11) {
            return false;
        }

        for (let t = 9; t < 11; t++) {
            let d = 0;
            let c;
            for (c = 0; c < t; c++) {
                d += Number.parseInt(cpf[c]) * ((t + 1) - c)
            }

            d = ((10 * d) % 11) % 10;

            if (Number.parseInt(cpf[c]) != d) {
                return false;
            }
        }


        return true;
    }

}