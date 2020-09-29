const app = require('../../servidor');
const ControlaToDo = require('../controller/ControlaToDo');
const bodyParser = require ('body-parser');
const cors = require('cors');
const methodOverride = require('method-override');
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
    
    app.use(methodOverride(function (req, res) {
        if (req.body && typeof req.body === 'object' && '_method' in req.body) {
          // look in urlencoded POST bodies and delete it
          var method = req.body._method
          delete req.body._method
          return method
        } 
    }));
    
    app.use('/static', express.static(__dirname + '/../public'));
    console.log(__dirname)

    app.get('/', ControlaToDo.lista());    

    app.post('/', ControlaToDo.adicionarCard());

    app.put('/editar', ControlaToDo.editarTarefa());
    
    app.delete('/', ControlaToDo.deleteCard());
}