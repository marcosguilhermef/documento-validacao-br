import { GerarCPF } from "./";
import { ValidarCPF } from "./";

let cpf = new GerarCPF().execute();

console.log(cpf)

let validate = new ValidarCPF(cpf).execute()

console.log(validate)