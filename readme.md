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

const value = (new ValidarCPF('000.000.000-00')).execute()
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
import { ValidarCNPJ } from "documento-validacao-br";

let cnpj = new ValidarCNPJ('000000000000000').execute()

console.log(validate)
~~~


# Gerar CNPJ

~~~
import { GerarCNPJ } from "documento-validacao-br";

let cnpj = new GerarCNPJ().execute()

console.log(validate)
~~~

# Gerar CNPJ com mascara

~~~
import { GerarCNPJ } from "documento-validacao-br";

let cnpj = new GerarCNPJ('xx.xxx.xxx/xxxx-xx').execute()

console.log(validate)
~~~




Todas as ferramentas deste pacote são usados no [toolsfordevs.com.br](https://toolsfordevs.com.br). Acesse para dar uma conferida e um crédito ao projeto.


Por favor, ajude um pobre programador a continuar esse projeto. Minha chave pix: https://toolsfordevs.com.br/_next/image?url=%2Fpix.jpeg&w=256&q=75 Qualquer valor já sou grato. 