# Sobre esse repositório

Repositório contendo as atividades da disciplina Arquitetura de Aplicações com Node.Js - professor Samuel Martins da Silva, parte integrante do curso de Especialização em Arquitetura de Software Distribuído, oferta 9, turma 1, PUC Minas 2025.

# Setup do ambiente de desenvolvimento

## Configuração do arquivo .gitattributes

[CRLF vs. LF: Normalizing Line Endings in Git](https://www.aleksandrhovhannisyan.com/blog/crlf-vs-lf-normalizing-line-endings-in-git/)

```shell
echo > .gitattributes
```

## Verificação da versão do Node.JS

Checar a versão ativa do Node.JS

```shell
node --version
# v24.5.0 (latest version)
```

Checar as versões instaladas usando o nvm:

```shell
nwm ls
#        v22.18.0
# ->      v24.5.0
# default -> node (-> v24.5.0)
# iojs -> N/A (default)
# unstable -> N/A (default)
# node -> stable (-> v24.5.0) (default)
# stable -> 24.5 (-> v24.5.0) (default)
# lts/* -> lts/jod (-> v22.18.0)
# lts/argon -> v4.9.1 (-> N/A)
# lts/boron -> v6.17.1 (-> N/A)
# lts/carbon -> v8.17.0 (-> N/A)
# lts/dubnium -> v10.24.1 (-> N/A)
# lts/erbium -> v12.22.12 (-> N/A)
# lts/fermium -> v14.21.3 (-> N/A)
# lts/gallium -> v16.20.2 (-> N/A)
# lts/hydrogen -> v18.20.8 (-> N/A)
# lts/iron -> v20.19.4 (-> N/A)
# lts/jod -> v22.18.0
```

Configurar o alias default para apontar para a versão LTS:

```shell
nvm alias default 22.18.0
```

Mudar para a última versão LTS instalada (LTS = suporte de longa duração) usando o `nvm`

```shell
nvm use default
```

Comandos adicionados ao arquivo `.bashrc` para evitar digitá-los a cada nova instância do bash criada:

```file
nvm alias default 22.18.0
nvm use default
node -v
```

### Instalação do nest cli globalmente

```shell
npm i -g @nestjs/cli
```

### Criação do projeto

```shell
nest new project-manager-api
# selected npm as package manager
```

### Pós-criação

Após a criação do projeto, os arquivos da pasta `project-manager-api` foram movidos para a raiz do repositório e a pasta `project-manager-api` foi removida. Com isso, o script para executar o projeto recém-criado foi alterado, removendo a necessidade de alterar o diretório do shell.

```shell
mv ./project-manager-api/* ./
rm -r ./project-manager-api
```

### Execução do projeto novo

```shell
npm run start
# npm run start:dev - to watch files
```

### Criação de estrutura de pastas para a arquitetura limpa usando domain driven design

```shell
# Create folders
mkdir src/domain
mkdir src/domain/entities
mkdir src/domain/interfaces
mkdir src/domain/use-cases
mkdir src/domain/use-cases/projects
mkdir src/domain/use-cases/tasks
mkdir src/domain/use-cases/users
mkdir src/gateways
mkdir src/gateways/controllers
mkdir src/gateways/controllers/projects
mkdir src/gateways/controllers/tasks
mkdir src/gateways/controllers/users
mkdir src/gateways/guards
mkdir src/infrastructure
mkdir src/infrastructure/auth
mkdir src/infrastructure/database
mkdir src/infrastructure/database/entities
mkdir src/infrastructure/database/repositories

# Add empty .gitignore in each one to preserve folder structure while no file is added
echo > src/domain/.gitignore
echo > src/domain/entities/.gitignore
echo > src/domain/interfaces/.gitignore
echo > src/domain/use-cases/.gitignore
echo > src/domain/use-cases/projects/.gitignore
echo > src/domain/use-cases/tasks/.gitignore
echo > src/domain/use-cases/users/.gitignore
echo > src/gateways/.gitignore
echo > src/gateways/controllers/.gitignore
echo > src/gateways/controllers/projects/.gitignore
echo > src/gateways/controllers/tasks/.gitignore
echo > src/gateways/controllers/users/.gitignore
echo > src/gateways/guards/.gitignore
echo > src/infrastructure/.gitignore
echo > src/infrastructure/auth/.gitignore
echo > src/infrastructure/database/.gitignore
echo > src/infrastructure/database/entities/.gitignore
echo > src/infrastructure/database/repositories/.gitignore
```

### Criação dos primeiros arquivos de código

```shell
# Controllers
echo > src/gateways/controllers/controller.module.ts
# [Controllers](https://docs.nestjs.com/controllers)
nest g controller gateways/controllers/projects
nest g controller gateways/controllers/tasks
nest g controller gateways/controllers/users

# Interfaces
echo > src/domain/interfaces/user.interface.ts
echo > src/domain/interfaces/task.interface.ts
echo > src/domain/interfaces/project.interface.ts

# Entities
echo > src/domain/entities/project.ts
echo > src/domain/entities/task.ts
echo > src/domain/entities/user.ts
```

### Atividade 2 - Arquitetura Clean

Instalação das dependências adicionais

```shell
# [TypeORM module for Nest](https://www.npmjs.com/package/@nestjs/typeorm)
# [TypeORM repository](https://github.com/nestjs/typeorm)

# [TypeORM is an ORM that can run in Node.js, Browser, Cordova, Ionic, React Native, NativeScript, Expo, and Electron platforms and can be used with TypeScript and JavaScript (ES2021)](https://www.npmjs.com/package/typeorm)
# [ORM for TypeScript and JavaScript](https://github.com/typeorm/typeorm)

# [Asynchronous, non-blocking SQLite3 bindings for Node.js](https://www.npmjs.com/package/sqlite3)
# [SQLite3 bindings for Node.js repository](https://github.com/TryGhost/node-sqlite3)

# [Allows use of decorator and non-decorator based validation. Internally uses validator.js to perform validation. Class-validator works on both browser and node.js platforms.](https://www.npmjs.com/package/class-validator)
# [Decorator-based property validation for classes.](https://github.com/typestack/class-validator)

# [Class-transformer allows you to transform plain object to some instance of class and versa](https://www.npmjs.com/package/class-transformer)
# [Decorator-based transformation, serialization, and deserialization between objects and classes.](https://github.com/typestack/class-transformer)

npm install --save @nestjs/typeorm typeorm sqlite3 class-validator class-transformer
```

#### Estrutura dos módulos

```shell
nest g module domain
nest g module domain/use-cases
nest g module domain/use-cases/projects
nest g module domain/use-cases/tasks
nest g module domain/use-cases/users
nest g module infrastructure
nest g module infrastructure/database
nest g module infrastructure/auth
nest g module gateways
```

#### Casos de uso

```shell
nest g service domain/use-cases/projects/get-all-projects --flat
nest g service domain/use-cases/projects/get-project-by-id --flat
nest g service domain/use-cases/projects/create-project --flat

nest g service domain/use-cases/tasks/get-all-tasks --flat
nest g service domain/use-cases/tasks/get-task-by-id --flat
nest g service domain/use-cases/tasks/create-task --flat
nest g service domain/use-cases/tasks/update-task --flat
```
