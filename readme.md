# documento validacao br

![](https://img.shields.io/cocoapods/l/documento-validacao-br)
![](https://img.shields.io/appveyor/build/marcosguilhermef/documento-validacao-br)

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

const value = (new ValidarCPF(params.cpf)).execute();
~~~



Todas as ferramentas deste pacote são usados no site https://toolsfordevs.com.br Acesse para dar uma conferida e um crédito ao projeto.