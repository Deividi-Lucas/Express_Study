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

## Uso no Insomnia

Rotas

- http://localhost:3000/
  Essa rota é para teste se o servidor subiu na máquina
- http://localhost:3000/list
  Rota para listagem de todo material no banco de dados
- http://localhost:3000/create
  Rota para criação de tabela com os dados inseridos
- http://localhost:3000/delete
  Rota para deletar tabela no banco de dados com o ID

### Inserção de dados

Exemplo de Post :

```
{
    "title":"Limpeza",
    "descrition":"Fazer limpeza no Quarto, cozinha e sala. Também limpar área de casa"
}
```

Saída do post:

```
{
	"title": "Limpeza",
	"descrition": "Fazer limpeza no Quarto, cozinha e sala. Também limpar área de casa",
	"_id": "6466bc65d8359f93d19ca55c",
	"__v": 0
}
```
