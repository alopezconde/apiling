//importamos
express = require("express");
mongoose = require("mongoose");
//instanciamos
const app = express();
const bodyParser = require("body-parser");
//midleware
app.use(bodyParser.json());
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  next();
});
//conectar a la base de datos
mongoose
.connect(
//mongodb+srv://admin:<PASSWORD>@cluster0-zzsuc.mongodb.net/test?retryWrites=true
"mongodb://animalapp:juan321560..@cluster0-shard-00-00-xshgl.mongodb.net:27017,cluster0-shard-00-01-xshgl.mongodb.net:27017,cluster0-shard-00-02-xshgl.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true",
{useNewUrlParser:true}
)
  .then(() => {
    console.log("connected");
  })
  .catch(err => {
    console.log("err", err);
  });

//modulos externos
var usuarios = require("./lib/usuarios");

app.get("/usuarios", (req, res) => {
  usuarios.getusuarios(req, res);
});

app.get("/usuarios/:id", (req, res) => {
  usuarios.getusuarios(req, res);
});

app.post("/usuarios", (req, res) => {
  usuarios.newusuarios(req, res);
});

app.put("/usuarios/:id", (req, res) => {
  usuarios.updateusuariosr(req, res);
});

app.delete("/usuarios/:id", (req, res) => {
  usuarios.deleteusuarios(req, res);
});
//pais
var pais = require("./lib/pais");

app.get("/pais", (req, res) => {
  pais.getpais(req, res);
});

app.get("/pais/:id", (req, res) => {
  pais.getpais(req, res);
});

app.post("/pais", (req, res) => {
  pais.newpais(req, res);
});

app.put("/pais/:id", (req, res) => {
  pais.updatepais(req, res);
});

app.delete("/pais/:id", (req, res) => {
  pais.deletepais(req, res);
});

//departamentos
var departamentos = require("./lib/departamentos");

app.get("/departamentos", (req, res) => {
  departamentos.getdepartamentos(req, res);
});

app.get("/departamentos/:id", (req, res) => {
  departamentos.getdepartamentos(req, res);
});

app.post("/departamentos", (req, res) => {
  departamentos.newdepartamentos(req, res);
});

app.put("/departamentos/:id", (req, res) => {
  departamentos.updatedepartamentos(req, res);
});

app.delete("/departamentos/:id", (req, res) => {
  departamentos.deletedepartamentos(req, res);
});

//palabras
var palabras = require("./lib/palabras");

app.get("/palabras", (req, res) => {
  palabras.getpalabras(req, res);
});

app.get("/palabras/:id", (req, res) => {
  palabras.getpalabras(req, res);
});

app.post("/palabras", (req, res) => {
  palabras.newpalabras(req, res);
});

app.put("/pais/:id", (req, res) => {
  palabras.updatepalabras(req, res);
});

app.delete("/palabras/:id", (req, res) => {
  palabras.deletepalabras(req, res);
});



// escuchamos
app.listen(3000);
console.log(`Server on %s ${app.settings.env}`);
