const express = require ('express');
const rotas = require ('./src/rotas/arquivo_rotas');
const db = require ('./src/BD/bc_dados');

const app = express();
const port = 3000;
         rotas(app, db);

app.listen(port, () =>{
console.log(`Example app listening at http://locahost:${port}`)
})

module.exports = app;