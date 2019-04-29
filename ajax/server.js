// responsável por fazer o parse do body da requisição
// interpreta os dados do request para serem manipulados por este arquivo
const bodyParser = require("body-parser");
const express = require("express");
// instanciação do express
const app = express();
// serve o conteúdo estático que está dentro da mesma pasta
app.use(express.static("."));
// se vier dados de um submit de um formulário esté código o transformará em um objeto
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
// se vier um json será lido por este código para transforma-lo em um objeto
app.use(bodyParser.json());

app.listen(8080, () => console.log("Executando...."));
