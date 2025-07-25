# banco-api-tests

Automação de testes para a API REST do projeto [`banco-api`](https://github.com/2015-lanoe/banco-api), utilizando JavaScript e bibliotecas modernas de teste.

## Objetivo

Realiza testes automatizados para Validar o comportamento e a integridade da API REST de um sistema bancário simulado, contribuindo que as funcionalidades estejam de acordo com os requisitos definidos.

## Stack Utilizada

- **Linguagem:** JavaScript (Node.js)
- **Framework de Testes:** [Mocha](https://mochajs.org/)
- **Biblioteca de Asserções:** [Chai](https://www.chaijs.com/)
- **Superagent HTTP Wrapper:** [Supertest](https://github.com/ladjs/supertest)
- **Relatórios de Teste:** [Mochawesome](https://github.com/adamgruber/mochawesome)
- **Gerenciador de Pacotes:** npm

## Estrutura de Diretórios

```
banco-api-tests/
├── test/                # Casos de teste organizados por funcionalidades
│   ├── login.test.js
│   └── transferencias.test.js             
├── mochawesome-report/  # Diretório gerado automaticamente com os relatórios HTML
├── .env                 # Variáveis de ambiente (não versionado)
├── .gitignore
├── package.json
└── README.md
```

## Formato do Arquivo `.env`

Crie um arquivo `.env` na raiz do projeto com o seguinte conteúdo:

```
BASE_URL=http://localhost:3000
```

> Substitua o valor por aquele correspondente ao ambiente onde a API está rodando.

## Como Executar os Testes

Instale as dependências:

```
npm install
```

Execute os testes:

```
npm test
```

Ou, para gerar o relatório HTML com o Mochawesome:

```
npx mocha test --reporter mochawesome
```

O relatório será salvo no diretório `mochawesome-report/` como um arquivo HTML.

## Documentação das Dependências

- [Mocha](https://mochajs.org/)
- [Chai](https://www.chaijs.com/)
- [Supertest](https://github.com/ladjs/supertest)
- [Mochawesome](https://github.com/adamgruber/mochawesome)
- [dotenv](https://github.com/motdotla/dotenv) - Para gerenciamento de variáveis de ambiente
