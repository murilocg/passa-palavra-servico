# passa-palavra-servico

## Requirements

- node versão mais atual
- postgresql:10

### postgresql:10

Download: https://www.postgresql.org/download/

Instale o postgresql com o pgAdmin para facilitar o desenvolvimento.
Observações: instale o postgresql na porta 5434.
Na pasta src/model/database, deste projeto, existe um arquivo com as configurações
necessárias para a aplicação acessar o banco de dados. Assim é recomendado
que o banco de dados, tanto quanto o usuário sejam criados de acordo com 
as especificações do arquivo "sequelizeconfig.json".

## Comece a desenvolver

*Certifique-se que você possui os requisitos necessários descritos acima.

- Inicialize o postgresql
- Abra o pgAdmin (crie o banco de dados e o usuário)
- Antes de iniciar a aplicação, entre na raiz do projeto e instale as dependências
 com o comando
    `npm install`
- Agora apenas inicie com o commando
    `npm start`

Teste a aplicação acessando a url http://localhost:3000/users/1. Caso receba a mensagem
"Usuário não encontrado" a aplicação iniciou corretamente, caso contrário verifique as
informações de conexão com o banco de dados, pois este é provavelmente o problema. Para
mais informações verifique o console da aplicação.