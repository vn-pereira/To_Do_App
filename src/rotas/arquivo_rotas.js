const templateToDo = require ('../view/template_todo_app');
const db = require("../BD/bc_dados");
const TarefasDAO = require('../DAO/TarefasDAO')

/*let tarefas = [{
    'titulo': 'Comer chocolate',
    'descricao': 'comer doce às 14h'
    },
    {
    'titulo': 'Beber suco',
    'descricao': 'Se refrescar do calor'
}];*/

module.exports = (app, db) =>{ 
    app.get('/', (requisicao, resposta) =>{  
        const tarefasDAO = new TarefasDAO(db); //instância da classe 
        
        tarefasDAO.listaTarefas((err, row) =>{
            if (err) { throw err }
            resposta.send(templateToDo(row));
        })    
    })
}

