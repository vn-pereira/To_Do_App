const ControlaToDo = require('../controller/controlaToDo')
const controlaToDo = require('../controller/controlaToDo')

/*let tarefas = [{
    'titulo': 'Comer chocolate',
    'descricao': 'comer doce às 14h'
    },
    {
    'titulo': 'Beber suco',
    'descricao': 'Se refrescar do calor'
}];*/

module.exports = (app, db) =>{ 
    app.get('/', ControlaToDo.lista())
}

