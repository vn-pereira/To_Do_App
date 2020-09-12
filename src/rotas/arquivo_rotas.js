const templateToDo = require ('../view/template_todo_app')

let tarefas = [{
    'titulo': 'Comer chocolate',
    'descricao': 'comer doce às 14h'
    },
    {
    'titulo': 'Beber suco',
    'descricao': 'Se refrescar do calor'
}];

module.exports = (app, db) => { 
    app.get('/', (requisicao, resposta) =>{
        db.all("select * from TAREFAS", [], (err, row) =>{
            if (err) { throw err }
            resposta.send(templateToDo(row));
        })
    })
}

