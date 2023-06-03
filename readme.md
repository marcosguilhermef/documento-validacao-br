<h1 align="center">documento-validacao-br</h1>
<hr>
/bower/l/:packageName
Instalação

npm install -f documento-validacao-br

Como usar o gerador de CPF?

import { GerarCPF } from "documento-validacao-br";

const value = (new GerarCPF()).execute()


Como usar o validador de CPF?

const value = (new ValidarCPF(params.cpf)).execute();


Todas as ferramentas deste pacote são usados no site https://toolsfordevs.com.br