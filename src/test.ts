import { GerarCPF } from "./";
import { ValidarCPF } from "./";
import { ValidarCNPJ } from "./";

let cpf = new GerarCPF().execute();

console.log(cpf)

let validate = new ValidarCPF(cpf).execute()

console.log(validate)

let cnpj = new ValidarCNPJ('01.393.975/0001-90').execute()

console.log(cnpj)