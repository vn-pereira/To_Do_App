const templateToDo = require ('../view/template_todo_app')

let tarefas = [{
    'titulo': 'Comer chocolate',
    'descricao': 'comer doce às 14h'
    },
    {
    'titulo': 'Beber suco',
    'descricao': 'Se refrescar do calor'
}];

module.exports = (app) => { 
    app.get('/', (requisicao, resposta) =>{
    resposta.send(templateToDo(tarefas));
    })
}

