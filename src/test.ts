import { GerarCPF } from "./";
import { ValidarCPF } from "./";
import { ValidarCNPJ } from "./";
import { GerarCNPJ } from "./";
let cpf = new GerarCPF().execute();

console.log(cpf)

let validate = new ValidarCPF(cpf).execute()

console.log(validate)
let cnpj = new ValidarCNPJ('00.000.000/0001-90').execute()

console.log(cnpj)

let ger = new GerarCNPJ().execute()

console.log({ cnpj:ger, len: ger.length})