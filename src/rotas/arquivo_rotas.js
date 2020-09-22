const app = require('../../servidor');
const ControlaToDo = require('../controller/ControlaToDo');
const bodyParser = require ('body-parser');
const cors = require('cors')

/*let tarefas = [{
    'titulo': 'Comer chocolate',
    'descricao': 'comer doce às 14h'
    },
    {
    'titulo': 'Beber suco',
    'descricao': 'Se refrescar do calor'
}];*/

module.exports = (app, express) =>{ 
    app.use(cors());
    app.use(bodyParser.urlencoded({extended: false}));
    
    app.use(bodyParser.json());
    
    app.use('/static', express.static(__dirname + '/../public'));
console.log(__dirname)

    app.get('/', ControlaToDo.lista());    

    app.post('/', ControlaToDo.adicionarCard());
    
    app.delete('/', ControlaToDo.deleteCard());
 
}