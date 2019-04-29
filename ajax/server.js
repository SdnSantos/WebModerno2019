// respons�vel por fazer o parse do body da requisi��o
// interpreta os dados do request para serem manipulados por este arquivo
const bodyParser = require("body-parser");
const express = require("express");
// instancia��o do express
const app = express();
// serve o conte�do est�tico que est� dentro da mesma pasta
app.use(express.static("."));
// se vier dados de um submit de um formul�rio est� c�digo o transformar� em um objeto
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
// se vier um json ser� lido por este c�digo para transforma-lo em um objeto
app.use(bodyParser.json());

app.listen(8080, () => console.log("Executando...."));
