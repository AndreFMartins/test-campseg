# Desafio

Para o desenvolvimento deste desafio, foi utilizado as tecnologias: VueJS, Vue Router, Vuex, Vue-Auth, Node-Sass, Bootstrap-Vue, Typescript. 

[APLICAÇÃO](http://andremartins.xyz)\
Os dados de acesso estão descritos na seção baixo.

## Observações

Como não foi especificado a api para o CRUD de usuários, foi desenvolvido uma api em PHP/Laravel para realizar a persistência dos dados e gerenciar a autenticação de usuários no sistema. \
Link do repositório da api: https://github.com/AndreFMartins/test-campseg-api

Foi solicitado a inserção de um usuário administrador no sistema para o gerenciamento dos usuários e somente o mesmo tem acesso ao módulo, segue os dados de acesso:\
**Usuário: admin \
Senha: 123mudar**

Para facilitar a criação de usuários administradores, no cadastro de usuários tem a opção "Administrador" que tem a finalidade de promover usuários à administração do sistema.

Foi inserido uma restrição para que um administrador não possa modificar seu  proprio papel e a executar a exclusão de sí mesmo, essa decisão foi pensada com o intuito de evitar que o administrador perca o acesso por equivoco. 

A solicitação do gráfico em tempo real foi feita, mas foi feita através de uma função recursiva, porém o correto deveria ser feito por uma conexão via websocket.

## Tecnologias auxiliares
 As seguintes tecnologias foram utilizadas afim de otimizar e agilizar o processo de desenvolvimento.\
- Laravel Framework: Utlizado no backend para criação da api a ser consumida pela aplicação
- WebSanova: Plugin para Vuejs autenticação com JWT, o mesmo possui mecanismo de ACL que permite o gerenciamento via roles.
- Sweetalert2: Plugin para alerta de notificação, agiliza no desenvolvimento de componente de feedback mais "amigáveis" para o usuário
- ApexCharts: Biblioteca para criação de gráficos dinâmicos e reativos.
- Typescript: Foi utilizado afim de ter maior controle no processo de desenvolvimento.
### Requisitos 

- NodeJs: 10.0.0 ou superior
- npm:    6.12.0 ou superior


### Configuração do projeto
Baixar as dependências do projeto:
```
npm install
```



### Compilação e hot-reload para desenvolvimento

Executar o projeto em modo de desenvolvimento.
```
npm run serve
```

### Geração de Build

Execute o comando abaixo para gerar o build do projeto.

```
npm run build
```
