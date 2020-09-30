const express = require ('express');
const rotas = require ('./src/rotas/arquivo_rotas');
const port = process.env.PORT || 3000;

const app = express();
    rotas(app, express);

app.listen(port, () =>{
console.log(`Example app listening at http://locahost:${port}`)
})

module.exports = app;