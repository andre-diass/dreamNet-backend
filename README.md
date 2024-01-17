
<h3 align="center">Nodejs, Serverless, MongoDB API</h3>

---

<p align="center"> 
Este projeto tem como objetivo o desenvolvimento de uma API Rest para o CRUD de recursos e 
cumprimento de requisitos não funcionais, como facilidade de escalabilidade da aplicação, resiliência e baixo custo operacional do ambiente em produção, através de infraestrutura como código 
para provisionamento da infraestrutura de cloud (AWS). O projeto tem arquiterura cliente - servidor. A camada de apresentação que consome a API está disponível neste repositório: 
https://github.com/andre-diass/store-admin
</p>

## 📝 Conteúdo <a name = "content"></a>
- [Sobre](#about)
- [Instalação](#getting_started)
- [Estrutura do Projeto](#project_structure)
- [Layout](#layout)
- [Arquitetura do Back-end](#system_architecture)
- [Requisitos Funcionais](#functionalities)
- [Requisitos Não Funcionais](#non_functional_requirements)
- [Diagrama de Caso de Uso](#use_case_diagram)
- [Plugins do Serverless](#serverless_plugins)
- [Diagrama de Atividade](#activity_diagram)
- [Pipeline de Deploy via GitHub Actions](#github_actions_pipeline)
- [Deploy](#deployment)
- [Desenvolvido com](#built_using)
- [Autores](#authors)
- [Agradecimentos](#acknowledgement)


## 📕 Sobre <a name = "about"></a>
Esta documentação está orientada tanto para informações, que descrevem as funcionalidades do projeto, quanto para compreensão, 
com o intuito de explicar as ferramentas e modelos utilizados em forma de explicação discursiva e visual. Esta documentação não abrange guias práticos ou tutoriais

## 🏁 Instalação <a name = "getting_started"></a>
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

## Estrutura do projeto <a name = "project_structure"></a>
A estrutura deste projeto está descrita abaixo:

| Nome                  | Descrição                                                                                       |
| --------------------- | ----------------------------------------------------------------------------------------------- |
| **.build**            | Contém a distribuição (ou saída) do seu build TypeScript.                                       |
| **.github**           | Contém o arquivo de fluxo de trabalho do GitHub Actions.                                        |
| **.envs**             | Contém as variáveis de ambiente.                                                                |
| **node_modules**      | Contém todas as dependências npm.                                                               |
| **src**               | Contém o código-fonte que será compilado para o diretório de build.                             |
| **src/database**      | Configuração da aplicação para o banco de dados. Uma fábrica para conexão com um cluster Mongo. |
| **src/functions**     | Representa o controlador. Cada função é um Lambda.                                              |
| **src/models**        | Entidades do projeto. Os modelos definem esquemas que serão usados para armazenar e recuperar dados do banco de dados da aplicação. |
| **src/repositories**  | Contém classes relacionadas à persistência de dados.                                            |
| **src/services**      | Contém classes relacionadas à lógica de negócios.                                               |
| **src/utils**         | Funções e classes utilitárias usadas em toda a aplicação.                                       |
| **src/validations**   | Esquemas usados para validações assíncronas de objetos de transferência de dados.               |
| package.json          | Contém dependências npm, bem como [scripts de build](#o-que-fazer-se-uma-biblioteca-nao-estiver-no-definitelytyped). |
| tsconfig.json         | Configurações para compilar apenas código-fonte escrito em TypeScript.                          |
| tslint.json           | Configurações para a verificação de estilo de código com o TSLint.                              |

## 🎨 Layout <a name = "layout"></a>
O layout dessa aplicação(front-end), está disponível em: <a href="https://www.figma.com/file/hrq37duWZOq54gsReKoIfN/Store-admin?type=design&node-id=0%3A1&mode=design&t=m98hujQXfZUr1MsG-1">Figma</a>

## 💻 Arquitetura do back-end <a name = "system_architecture"></a>
![Alt text](https://upload-png-4567.s3.us-west-1.amazonaws.com/Cloud+Formation+(8).jpg)


## Requisitos Funcionais <a name = "functionalities"></a>

- [x] CRUD de produtos;
- [x] CRUD de categorias;
- [ ] Gestão de pedidos;
- [x] Autenticação de usuários;
- [x] Autorização baseada em papéis;
- [x] Geração de token de acesso (JWT);
- [ ] Integração com serviços de pagamento;
- [ ] Monitoramento e logs;
- [x] Integração com provedores de armazenamento em nuvem;
- [ ] Implementação de testes automatizados;
- [ ] Documentação abrangente.


## Requisitos Não Funcionais <a name = "non_functional_requirements"></a>

- **Elasticidade:** A arquitetura serverless permite escalabilidade automática, garantindo que o sistema possa lidar com variações significativas na carga de trabalho.
- **Resiliência:** O uso de AWS Lambda proporciona alta resiliência, permitindo que as funções sejam distribuídas geograficamente e continuem funcionando mesmo em face de falhas em regiões específicas.
- **Baixo Custo Operacional:** A abordagem serverless reduz os custos operacionais, pois os recursos são alocados dinamicamente conforme a demanda, evitando custos fixos associados a servidores tradicionais.
- **Tempo de Resposta Rápido:** O modelo serverless, especialmente com o AWS Lambda, oferece tempos de resposta rápidos, uma vez que as funções são executadas em milissegundos.
- **Facilidade de Manutenção:** O Serverless Framework simplifica a gestão da infraestrutura, tornando a manutenção mais fácil e permitindo uma concentração maior no desenvolvimento de recursos.
- **Segurança:** A AWS fornece recursos robustos de segurança, e o Serverless Framework adota práticas seguras por padrão, garantindo a proteção dos dados e transações.
- **Integração com Outros Serviços AWS:** A integração nativa com outros serviços da AWS é simplificada, proporcionando uma ampla gama de opções para armazenamento, banco de dados, mensageria, entre outros.
- **Monitoramento e Logs:** A AWS oferece ferramentas robustas para monitoramento e logging, permitindo uma visibilidade eficaz do desempenho e da saúde do sistema.
- **Compliance:** A infraestrutura da AWS e as práticas do Serverless Framework facilitam a conformidade com regulamentações e padrões de segurança.


## ✏️ Diagrama de caso de uso <a name = "use_case_diagram"></a>
<img src="https://upload-png-4567.s3.us-west-1.amazonaws.com/Use+case+diagram+(1).jpg" alt="Alt text">

## Plugins do Serverless <a name = "serverless_plugins"></a>
Este projeto utiliza os seguintes plugins do Serverless Framework para otimizar e facilitar o desenvolvimento:

- **serverless-plugin-typescript:** Facilita o uso do TypeScript no Serverless, permitindo a compilação e execução de funções escritas nessa linguagem.
- **serverless-offline:** Permite a execução de funções serverless localmente, facilitando o desenvolvimento e teste antes da implantação.
- **serverless-dotenv-plugin:** Simplifica o gerenciamento de variáveis de ambiente, permitindo o uso de arquivos .env no desenvolvimento local e em ambientes de implantação.
- **serverless-s3-local:** Fornece uma implementação local do Amazon S3, facilitando o desenvolvimento e teste de funcionalidades que envolvem armazenamento de objetos.



## ⚒️ Diagrama de atividade <a name = "activity_diagram"></a>
![Alt text](https://upload-png-4567.s3.us-west-1.amazonaws.com/Activity+diagram.jpg)

## Pipeline de Deploy via GitHub Actions <a name = "github_actions_pipeline"></a>

Este projeto incorpora um pipeline automatizado utilizando o GitHub Actions para facilitar o processo de implantação contínua. O pipeline é acionado automaticamente em commits nas branches "development" e "main". 

### Passos Principais:
1. **Checkout:** Clona o repositório para a máquina virtual de execução.
2. **Configuração de Credenciais AWS:** Configura as credenciais da AWS para permitir o acesso durante o deploy.
3. **Instalação de Dependências:** Utiliza o npm para instalar as dependências do projeto.
4. **Definição da Variável STAGE:** Determina o ambiente de implantação (dev ou prod) com base na branch de origem.
5. **Deploy da Aplicação Serverless para a AWS:** Utiliza o Serverless Framework para implantar a aplicação na AWS, indicando o ambiente (dev ou prod).


## 🚀 Deploy <a name = "deployment"></a>
O deploy é realizado através do push para um dos branches development ou main.

## ⛏️ Desenvolvido com <a name = "built_using"></a>
- [Serverless Framework](https://www.serverless.com/) - Framework para desenvolvimento serverless
- [AWS](https://aws.amazon.com/) - Plataforma de computação em nuvem
- [Node.js](https://nodejs.org/en/) - Ambiente de servidor
- [TypeScript](https://www.typescriptlang.org/) - Superset para JavaScript com tipagem estática
- [MongoDB](https://www.mongodb.com/) - Banco de Dados NoSQL
- [AWS Lambda](https://aws.amazon.com/lambda/) - Serviço de computação serverless da AWS
- [JSON Web Token (JWT)](https://jwt.io/) - Padrão para autenticação web


## ✍️ Autores <a name = "authors"></a>
- [@andredias](https://github.com/andre-diass) - Idea & Development

## 🎉 Agradecimentos <a name = "acknowledgement"></a>

