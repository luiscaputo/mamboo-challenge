# mamboo-challenge
This repository was created to make a mamboo challenge, this test require make a simple api to list tasks, create, update, get one task and remove task.

<br/>

Este é uma solução de uma API em Node.js & Typescript!


## 🚀 Tecnologias & Ferramentas utilizadas

* **[Node.js](https://nodejs.org/pt-br/)**
* **[TypeScript](https://www.typescriptlang.org/download)**
* **[Visual Studio Code](https://code.visualstudio.com/)**
* **[Insomnia](https://insomnia.rest/download)**
* **[Mongoose]**
* **[Git](https://git-scm.com/downloads)**
* **[Docker](https://www.docker.com/products/docker-desktop/)**

<br/>

> ## Princípios aplicados 
* **S**ingle Responsibility Principle (SRP)
* **O**pen Closed Principle (OCP)
* **L**iskov Substitution Principle (LSP)
* **I**nterface Segregation Principle (ISP)
* **D**ependency Inversion Principle (DIP)
* Separation of Concerns (SOC)
* Don't Repeat Yourself (DRY)
* You Aren't Gonna Need It (YAGNI)
* Keep It Simple, Silly (KISS)
* Composition Over Inheritance

> ## Design Patterns
* Dependency Injection
* Singleton

> ## Metodologias e Designs
* Clean Architecture
* Conventional Commits
* Use Cases

> ## Bibliotecas
* NPM
* Typescript
* Git
* Bcrypt
* JsonWebToken
* Express
* Eslint
* Jest
* Mongoose

> ## Features do Node
* API Rest com Express
* Logs de Erro
* Segurança (Hashing, Encryption e Encoding)
* CORS
* Middlewares


> ## Features do Git
* Alias
* Branch
* Tag
* Merge


> ## Features do Typescript
* POO
* Interface
* TypeAlias
* Namespace
* Utility Types

Recursos disponíveis para acesso via API ou endpoints(URI):

- **baseURL** - localhost:3331/v1/
- **tasks** - /tasks

| Método    | Descrição                         |
| ------    | --------------------------------- |
| `POST`    | `/tasks/create`                   |
| `GET`     | `/tasks/{id}` e `/products`       |  
| `GET`     | `/tasks`                          |   
| `PUT`     | `/tasks/update`                   |   
| `DELETE`  | `/tasks/{id}/remove`              |   


Um exemplo do funcionamento das rotas.


## Dependencias | Instalando o proejcto

# Normal

- Rode um yarn | npm install para baixar todas as dependências

# Via DOCKER

1. `docker-compose build/sudo docker-compose build` - no windows/Linux
2. `docker-compose up -d/sudo docker-compose up -d` - Para rodar a o container em backGround
3. `docker-compose up/docker-compose up` - Para rodar a aplicação também
4. Rode um `docker ps/sudo docker ps` - Para verificar se os containers estão rodando

Para rodar a aplicação siga os seguintes passos:
Primeiro: Crie as variáveis de ambiente `.env`, e dentro delas configure as variáveis de ambiente existentes no `.env.example`, é importante copiar esses dados: 
``` JWT_SECRET=d54155e2afdd17f23bbfb7ca6348e69c ```
``` MONGO_USER=raul ```
``` MONGO_PASSWORD=Laurindo233.mongo ```


## Métodos

Requisições para a API devem seguir os padrões:

| Método | Descrição |
| -------- | ----------------------------------------------------- |
| `GET`  | Retorna informações de um ou mais registros. |
| `POST` | Utilizado para criar um novo registro. |
| `PUT`  | Utilizado para atualizar um registro. |
| `DELETE` | Utilizado para remover um registro. |

## Rode o Projeto

- Para executar, basta:

| Comando                       | Descrição                      |
| ----------------------------- | ------------------------------ |
| `yarn test` ou `npm run test` | Rodando os testes da Aplicação |
| `yarn dev` ou `npm run dev`   | Rodando a aplicação em geral   |
| `yarn test`                   | Rodando os testes da Aplicação |
| `yarn lint`                   | Rodando os ajusts na Aplicação |


## Respostas

| Código | Descrição                                                          |
| ------ | ------------------------------------------------------------------ |
| `200`  | Requisição executada com sucesso (success).                        |
| `201`  | Registro Criado com sucesso.                                       |
| `400`  | Erros de validação ou os campos informados não existem no sistema. |
| `404`  | Valor não encontrado                                               |
| `500`  | Erro interno do servidor.                                          |

## Padrão de Retorno dos dados

- Response 201 (application/json)

  - Body

    ```
      {
        "success": true/false,
        "message": String,
        "data": Object/String
      }
    ```

Caso a requisição não conter nenhuma resposta ou falhar o retorno será:

- Response 400(Aplication/json)

  ```
    {
      "success": false,
      "data": "Invalid User"
    }
  ```
  
  <hr>

<h4>Desenvolvido por: <strong style="color: #1f6feb; align: center">Luís Afonso Caputo</strong></h4>
