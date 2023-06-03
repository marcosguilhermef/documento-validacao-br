"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _1 = require("./");
const _2 = require("./");
let cpf = new _1.GerarCPF().execute();
console.log(cpf);
let validate = new _2.ValidarCPF(cpf).execute();
console.log(validate);
