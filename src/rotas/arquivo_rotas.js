const app = require('../../servidor');
const ControlaToDo = require('../controller/ControlaToDo');
const bodyParser = require ('body-parser');


/*let tarefas = [{
    'titulo': 'Comer chocolate',
    'descricao': 'comer doce às 14h'
    },
    {
    'titulo': 'Beber suco',
    'descricao': 'Se refrescar do calor'
}];*/

module.exports = (app) =>{ 
    app.use(bodyParser.urlencoded({extended: false}));
    
    app.get('/', ControlaToDo.lista());    

    app.post('/', ControlaToDo.adicionarCard());
    
}