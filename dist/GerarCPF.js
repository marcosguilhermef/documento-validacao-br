"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GerarCPF = void 0;
class GerarCPF {
    constructor(regex = '') {
        this.parameter = regex;
    }
    execute() {
        if (this.parameter === undefined) {
            return this.generate();
        }
        return this.generateWithMask(this.generate(), this.parameter);
    }
    gerenateSeed(x) {
        return Math.round(Math.random() * x);
    }
    round(x, y) {
        return Math.round(x - Math.floor(x / y) * y);
    }
    sum(x) {
        return x.slice().reverse().reduce((e, i, a) => e + i * (a + 2), 0);
    }
    generate() {
        const numbers = [];
        while (numbers.length < 9) {
            numbers[numbers.length] = this.gerenateSeed(9);
        }
        while (numbers.length < 11) {
            let last = 11 - this.round(this.sum(numbers), 11);
            if (last > 9) {
                last = 0;
            }
            numbers[numbers.length] = last;
        }
        const result = numbers.join('');
        return result;
    }
    generateWithMask(cpf, mask = 'xxx.xxx.xxx-xx') {
        if (!mask) {
            return cpf;
        }
        let regex = mask.match(new RegExp('x', 'g'));
        if (regex != null) {
            if (regex.length < 11) {
                throw new Error('The CPF mask should contain 11 placeholders');
            }
        }
        const placeholderRegex = new RegExp('x');
        for (let i = 0; i < 11; i++) {
            mask = mask.replace(placeholderRegex, cpf[i]);
        }
        return mask;
    }
}
exports.GerarCPF = GerarCPF;
