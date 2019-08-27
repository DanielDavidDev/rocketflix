# RocketFlix
<br/>
<h3 align="center" style="font-weight: bold">
Este repositório tem o objetivo de criar uma plataforma de videos, em Node.Js, ReactJs e React Native, para a empresa ! 🚀
</h3>

<div><br />

## [Rocketseat](https://www.github.com/Rocketseat)

</div>

<hr />

## Visão global

Este projeto tem um papel fundamental para a aprendizagem entre desenvolvedores e é para isso que existe a comunidade. Foi pensado exclusivamente para construirmos juntos um ambiente bem parecido com o aplicativo Netflix, com funcionalidades de videos lançados no momento, playlists, notificações, testes automatizados e muitas outras coisas que você poderá aplicar durante o seu desenvolvimento.

Para melhor exemplificar o projeto, será separado em tópicos, falando exclusivamente sobre, para manter a fluidez e facilidade, tendo um maior conforto para ambos, seja backend, ou frontend.


    Nota:

      É importante ressaltar que este projeto, não tem o objetivo de ir para a produção, caso você queira colocar, é necessário que você fale diretamente com a Rocketseat. Não nos responsabilizamos por nada que você faça fora do github. 

<hr />

## Tabela de conteúdo

- [Ferramentas](#ferramentas)
  - [Backend](#backend)
  - [Frontend](#frontend)
  - [Avançadas](#avançadas)
- [Contribuição](#contribuição)
- [Licença](#licença)

<hr />

## Ferramentas

As ferramentas que serão usadas e aplicadas durante o desenvolvimento, serão diversas e idependentes para cada visão.

<hr />

### Backend

Primeiramente cada projeto, possui uma ierarquia de pastas e você deve seguir para não se perder durante o seu desenvolvimento.

````
src/
┣ app/
┃   ┗ models/
┃     ┗ User.js
┣ config
┃   ┗ database.js
┗ database/
    ┣ migrations/
    ┗ index.js
````
Aqui você precisará entender como funciona o fluxo, porque este é o seu ponto de partida para começar a programar em Nodejs.

A pasta **src** será o armazenador do código fonte, pois encapsulará toda a regra de negcio e não somente em um arquivo só. De início, você irá possuir um arquivo chamado de **src/app.js**, é onde você indicará o inicio, rotas e middlewares da aplicações. É importante ressaltar, que essa aplicação estará rodando na porta `3333`, para caso você esteja usando ela, em algum momento, sugiro parar todos os processos em execução sendo do software node, para não dar ninhum conflito.

- o arquivo que se encontra no caminho `~/nodemon.json`, ele é responsável para configurar a dependência nodemon, que se você executar um arquivo javascript e sendo o mesmo path, ele automaticamente, troca o path para `sucrase-node`, deixando muito mais performático a inicialização do servidor.

  - **app** - na pasta app, é onde é guardada a regra de negócio da sua aplicação, sendo assim, pode-se conter dentro da pasta: `controllers`, `models`, `middlewares` e entre outros.

  - **config** - na pasta config, é onde se armazenado todo e qualquer tipo de configuração, seja ela do banco de dados, email, filas, entre outras.

  - **database** - na pasta database, está sendo armazenado configurações de conexão entre models e as migrations do banco de dados, ou seja, para esse projeto está sendo usado o sequelize para gerenciar e o dialeto é o `postgresql`.

Para configurar o sequelize, existe um arquivo chamado `.sequelizerc`, ele tem o objetivo de encontrar o caminho para o banco de dados, para os models, para as migrations e para os seeders!

- O arquivo que se encontra em `~/src/config/database.js`, ele é responsável para configurar o banco de dados, dizer que dialeto, nome do banco de dados, username, senha e host.

- o arquivo que se encontra no caminho `~/src/routes.js`, ele é responsável pelas rotas da aplicação, sendo assim muito importante para o processo de manipulação dos dados.

Com isso você já pode sinta a necessidade de mais alterações nesta documentação, sinta-se a vontade para abrir uma issue e configurar. Presumo que você possa ser grande útil para nos ajudar a deixar ainda mais legível para outros programadores.

<hr />

### Frontend

````
src
┣ components
┃   ┗ Header
┣ pages
┃   ┣ _Layout
┃   ┗ SignIn
┣ routes
┣ styles
┃     ┗ User.js
````

    Ainda em desenvolvimento.

<hr />

## Contribuição

Antes de sair codando, você precisa fazer um passo a mais para se registrar nesse projeto como contribuidor :)

Escolha qual projeto vai utilizar para desenvolvimento, vou supor que você está em `backend`, então você entrará no arquivo **package.json**, nele você vai encontrar uma propriedade chamada de `contributors`, e adicione o seu nome, url e email(opcional).

```json
"contributors": [
  {
    "name": "seu nome",
    "email": "seu email",
    "url": "htpps://github.com/seu_usuario"
  }
]
```

É importante que você não mexa nos nomes de seus colegas, caso isso aconteça, **não será aceito a pull request**.


Contribuições são o que fazem a comunidade open source um lugar incrível para aprender, inspirar e criar. Qualquer contribuição que você fizer será **muito apreciada**.

1. Faça um Fork do projeto
2. Crie uma Branch para sua Feature (`git checkout -b feature/FeatureIncrivel`)
3. Adicione suas mudanças (`git add .`)
4. Comite suas mudanças (`git commit -m 'Adicionando uma Feature incrível!`)
5. Faça o Push da Branch (`git push origin feature/FeatureIncrivel`)
6. Abra uma Pull Request

# Licença

MIT
