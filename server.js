
express = require("express");
mongoose = require("mongoose");
const app = express();
//
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use((rep, res, next)=>{
  res.header("Access-Control-Allow-Origin","*");
  res.header("Access-Control-Allow-Methods","GET, POST, PUT, DELETE, OPTIONS");
  next();
});
//conectar a la base de datos
mongoose
  .connect(
    "mongodb+srv://admin:Lopezs.a1@cluster0-zndan.mongodb.net/apiling?retryWrites=true",
    { useNewUrlParser: true }
  )
  .then(() => {
    console.log("connected");
  })
  .catch(err => {
    console.log("err", err);
  });

app.get("/", (req, res)=> {
  res.send("Ludic api");
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


app.listen(3000);
console.log(`Servidor on ${app.settings.env}`);
