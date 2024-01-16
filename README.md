
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



## 🚀 Use case diagram <a name = "deployment"></a>
![Alt text](https://upload-png-4567.s3.us-west-1.amazonaws.com/Use%20case%20diagram%20%281%29.jpg?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXNhLWVhc3QtMSJHMEUCIQCpCxwn30rsYh1AvLIeZJ03i1m9%2BasumRXfH0iL7dLYBwIgALOQR4BuE06cihpA%2BpyA4gVExBoKXkKRkXbmOOAcM%2FUq7QIIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARABGgwyMDIyNjA4MDY3NjMiDPOdO8cdeuK20AtKyCrBAq9ivkfHiQzyT9UNS%2Fvpzb3AZdt%2FRjFlHBB5SJ3w8zvIJjxxiFSJCfbqZr7QbWFCALAYw262AaRYBebv976i7x%2B4piP6JLj4yTXHUgxnsdhJayPnUUOIOTCAzRzj8JVtRPOwuM6QeHwnetS9ciQnHc04ZJ9evz2eD4nXB8Eo9d%2FaqPtiMwa%2BkwJ7V0Rf%2FStRir%2FjD%2F3VoueElSlNj22DgBaWxDGfJTGFAt%2BwXKw87YqvXzgIcXLZ4PT4k7hOyDmDKFXXdbnt6BF8owSI1U51BvwBwxp0BmmS3mNr9fA1pNaq8xrPxpU5BwObg38Pa5vEPRHpOYJOqMvnOlEbUWEjygZuwRanfRmxIIQWgiRFGetL1q7%2F421LiQVSQjG14XfD%2BTH%2FaaHOJgiP5D4rcqNIMFr8yfIgP3kMhnsFLxW%2BwyvhHTDWwZutBjqzAohGdOBRBgSgdUYrnXbvFp0gINYx4MvGkkqeSX99ZnULREUp4Rh3mjG3TALtQxRREXv3T7ww6WKpEWSXQ2cQ1bYv1n6l3yKbTM%2F5cPCu0dVltjoMrKfyOIFQ1i9Oj0MoW6PV4IXRXbbG6ZvLDoeBaAL8IahWqKX6IReaRuM9uMcQ0EEcGUkkG2E%2BfY1Bw0sfhzCie8bxvhXnif9gEdbMK3cuG300gAdbWK6NUT2Wt8xmcEm4GC4oSAy294D2OWXybceFNZd0tRR2zDG3ScHgXjZr0tLvKOauu9kdXnA4CbyUwBGfoY5CrgZzD%2BgeGePweZPXgyAxtOE16VeH8J7uhkE5%2BwljEu%2Bmc%2FyYhIgWj0df1iw0SzCMkJg7QCDt%2Bh6N8eobjLjy%2FVN4zlsiONZcW2jD32M%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240116T200343Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIAS6F5O7RVRCUYOYPX%2F20240116%2Fus-west-1%2Fs3%2Faws4_request&X-Amz-Signature=ac900f9cd89c6ea98fb985eeff402f96a04f5df1eef778871f4d04307700ce84)



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
