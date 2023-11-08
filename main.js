const express = require("express")
const app = express()
const db = require("./db")

app.use(express.json())
app.use(express.urlencoded({ extended: false }))


app.get('/', function(req, res){
  const users = db.findAll();
  // console.log(users);
  res.send(users);
})

app.get('/:id/:nome', function(req, res){
  const userById = db.findById(req.params.id);
  // console.log(req.params);
  res.send(userById);
});

app.get('/user?', function(req,res){
  const userWithQuery = db.findById(req.query.id);
  // console.log(req.query)
  res.send(userWithQuery);
});

app.post('/', function(req, res){
  const newUser =  db.create(req.body);
  res.status(201).send("Usuário Cadastrado com sucesso!");
});

app.put('/:id', function(req, res){
  const upUser = db.updateById(req.params.id, req.body);
  res.send(upUser);
});

app.delete('/:id', function(req, res){
  const deleteUser = db.remove(req.params.id);
  res.send(`Removido: ${deleteUser.message}`);
});


app.listen(3030, () => {
  console.log("Esse servidor está rodando em http://localhost:3030")
})