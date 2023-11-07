const express = require("express")
const app = express()
const db = require("./db")

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Exercicio de CRUD
// Utilizando as 5 funções encontradas em db, crie 5 endpoints para o recurso "usuario".
// (Leia em README para saber mais sobre as funções)
/* 
    O recurso usuario deve ter as seguintes propriedades com seus respectivos tipos:
    { 
        name: String, 
        email: String, 
        password: String 
    }
*/
app.get('/', function(req, res){
  const users = db.findAll();
  console.log(users);
  res.send(users);
})

app.post('/', function(req, res){
  const newUser =  db.create(req.body);
  res.send("Usuário Cadastrado com sucesso!");
});


app.listen(3030, () => {
  console.log("Esse servidor está rodando em http://localhost:3030")
})