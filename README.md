
<h3 align="center">Nodejs, Serverless, MongoDB API</h3>

---

<p align="center"> 
Este projeto tem como objetivo o desenvolvimento de uma API Rest para o CRUD de recursos e 
cumprimento de requisitos não funcionais, como facilidade de escalabilidade da aplicação, resiliência e baixo custo operacional do ambiente em produção, através de infraestrutura como código 
para provisionamento da infraestrutura de cloud na AWS. O projeto tem arquiterura cliente - servidor. A camada de apresentação que consome a API está disponível neste repositório: 
https://github.com/andre-diass/store-admin
</p>

## 📝 Table of Contents
- [About](#about)
- [Getting Started](#getting_started)
- [Deployment](#deployment)
- [Usage](#usage)
- [Built Using](#built_using)
- [TODO](../TODO.md)
- [Contributing](../CONTRIBUTING.md)
- [Authors](#authors)
- [Acknowledgments](#acknowledgement)

## 📕 About <a name = "about"></a>
Esta documentação está orientada tanto para informações que descrevem as funcionalidades do projeto quanto para compreensão, 
para explicar as ferramentas e modelos por trás dele em forma de explicação discursiva e visual. Esta documentação não abrange guias práticos ou tutoriais.

## 🏁 Getting Started <a name = "getting_started"></a>
Essas instruções permitirão que você tenha uma cópia do projeto em execução em sua máquina local para fins de desenvolvimento e teste.

- Clone the repository
```
git clone https://github.com/andre-diass/store-backend.git
```
- Install dependencies
```
cd <project_path>
npm install
```
- Build and run the project
```
npm run dev
```

## Project Structure <a name = "project_structure"></a>
The folder structure of this app is explained below:

| Name | Description |
| ------------------------ | --------------------------------------------------------------------------------------------- |
| **.build**               | Contains the distributable (or output) from your TypeScript build.  |
| **.github**              | Contains the GitHub Actions workflow file  |
| **.envs**                | Contains the environment variables   |
| **node_modules**         | Contains all npm dependencies                                                            |
| **src**                  | Contains source code that will be compiled to the build dir                              |
| **src/database**         | Application configuration for the database. A factory to a connection to a Mongo Cluster
| **src/functions**        | Represent the controller. Each function is a Lambda 
| **src/models**           | Project entities. Models define schemas that will be used in storing and retrieving data from Application database  
| **src/repositories**     | Contains classes concerned with persisting data 
| **src/services**         | Contains classes concerned with bussiness logic                       
| **src/utils**            | Utils functions and classes used across the application  |
| **src/validations**      | Schemas used for asynchronous validations of data transfer objects |                                                            |
| package.json             | Contains npm dependencies as well as [build scripts](#what-if-a-library-isnt-on-definitelytyped)   | tsconfig.json            | Config settings for compiling source code only written in TypeScript    
| tslint.json              | Config settings for TSLint code style checking                                                |

## 🚀 System Architecture <a name = "system_architecture"></a>
![Alt text](https://upload-png-4567.s3.us-west-1.amazonaws.com/Cloud+Formation+(8).jpg)


## 🚀 Use case diagram <a name = "use_case_diagram"></a>
<img src="https://upload-png-4567.s3.us-west-1.amazonaws.com/Use+case+diagram+(1).jpg" alt="Alt text">


## 🚀 Activity diagram <a name = "activity_diagram"></a>
![Alt text](https://upload-png-4567.s3.us-west-1.amazonaws.com/Activity+diagram.jpg)

## 🚀 Deployment <a name = "deployment"></a>
Add additional notes about how to deploy this on a live system.

## ⛏️ Built Using <a name = "built_using"></a>
- [MongoDB](https://www.mongodb.com/) - Database
- [Express](https://expressjs.com/) - Server Framework
- [VueJs](https://vuejs.org/) - Web Framework
- [NodeJs](https://nodejs.org/en/) - Server Environment

## ✍️ Authors <a name = "authors"></a>
- [@kylelobo](https://github.com/kylelobo) - Idea & Initial work

See also the list of [contributors](https://github.com/kylelobo/The-Documentation-Compendium/contributors) who participated in this project.

## 🎉 Acknowledgements <a name = "acknowledgement"></a>
- Hat tip to anyone whose code was used
- Inspiration
- References
