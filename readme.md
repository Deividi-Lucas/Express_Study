# Repositório de estudo

#### Aqui vemos sobre o Express, um Framework em JavaScript

Para instalar o Express num aplicação simples siga os comando abaixo:

```
npm init
npm install express --save
npm install
```

##### Instalação finalizada

### Próximo passo é Seguir com a estrutura de funcionalidade

##### Crie um arquivo index.js e nele digite os seguintes comandos:

```
const express = require('express')
const app = express()
const port = 3000

app.get('/',(req,res)=>{
    res.send('O texto que você deseja vai aqui')
})

app.listen(port, ()=>{
    console.log(`Seu servidor está rodando na porta ${port}`)
})
```

### Comando para testar a sua aplicação

```
node index.js
```

---

#### Complementação do projeto.

Utilizar a ferramenta nodemon, para reiniciar o servidor automaticamente

Utilizar MongoDB como banco de dados que utiliza o mongoose.

Utilizar dotenv para ler e mensagem .env que é senha e user do banco de dados

---

### Criado por Deividi Lucas
