#  Test React - 3LM Informática

![](Video.gif)

Aplicativo web desenvolvido para o teste da vaga de desenvolvedor React da empresa 3LM Informática.

### ==Tech==

- React
- Typescript
- Bootstrap
- Styled Component
- Redux e Saga
- [Node JS + Mysql(Knex)](https://github.com/rafaelalveriano/employee-manager-backend) - Backend

### ==Requisitos==
O sistema deverá ser desenvolvido utilizando React.js
Você deve criar um CRUD que permita cadastrar as seguintes informações:
Funcionário: Nome, sobrenome, cargo, data de nascimento, salário Cargo: Descrição.
Obs: São duas tabelas diferentes, uma para funcionário e outra para cargo 
Salvar as informações em memória (Redux é um diferencial)

Utilização de Typescript
Desenvolver um backend (php ou node.js)
Utilizar bando de dados MySql para armazenar os dados (relacional ou não), outro banco de dados não será aceito.

### ==Executar==

```sh
$ cd employee-manager-react
$ npm install ou yarn
$ yarn knex migrate:latest ou npx knex migrate:latest
$ yarn start | npm start
```

### ==Demo Live==

### [Visualizar](https://laughing-brahmagupta-5ac66d.netlify.app/)
