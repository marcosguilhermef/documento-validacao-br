# documento validacao br
![](https://img.shields.io/npm/dt/documento-validacao-br)
![](https://img.shields.io/github/license/marcosguilhermef/documento-validacao-br)

# Instalação

npm install -f documento-validacao-br

# Como usar o gerador de CPF?

~~~
import { GerarCPF } from "documento-validacao-br";

const value = (new GerarCPF()).execute()
~~~


# Como usar o validador de CPF?
~~~
import { ValidarCPF } from "documento-validacao-br";

const value = (new ValidarCPF()).execute()
~~~


# Gerar CPF com mascara

~~~
import { GerarCPF } from "documento-validacao-br";

const mask = 'xxx.xxx.xxx-xx'
const value = (new GerarCPF(mask)).execute()
~~~



# Usando require

~~~
const { GerarCPF } = require("documento-validacao-br")

var cpf = new GerarCPF().execute()

~~~

# Validar CNPJ

~~~
import { ValidarCNPJ } from "./";

let cnpj = new ValidarCNPJ('000000000000000').execute()

console.log(validate)
~~~



Todas as ferramentas deste pacote são usados no site <a href="https://toolsfordevs.com.br">https://toolsfordevs.com.br</a> Acesse para dar uma conferida e um crédito ao projeto.
