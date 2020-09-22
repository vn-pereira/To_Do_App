//pegar os dados e mostrar no template
const templateToDo = require('../view/template_todo_app');
const db = require('../BD/bc_dados');
const TarefasDAO = require('../DAO/TarefasDAO');

class ControlaToDo{
    constructor(){
        throw('não precisa de instância');
    }
    static lista(){
        return function (requisicao, resposta){  
            const tarefasDAO = new TarefasDAO(db); //instância da classe para usar o BD
            
            tarefasDAO.listaTarefas((err, row) =>{
                if (err) { throw err }
                resposta.send(templateToDo(row));
            })  
        }         
    }

    static adicionarCard(){
        return function (requisicao, resposta){
            const tarefasDAO = new TarefasDAO(db);

            tarefasDAO.adicionarTarefa(requisicao, (err, row)=>{
                if(err) console.log('Deu erro parça');
                resposta.send(templateToDo(row));
            })
        }
    }

    static deleteCard(){
        return function(requisicao, resposta){
            const tarefasDAO = new TarefasDAO(db);

            tarefasDAO.deleteCard(requisicao, (err, row)=>{
                console.log(requisicao);
                if(err) console.log('Deu ruim no Delete');
                resposta.send(console.log('Delete ok'));
            })
        }
    }
}

module.exports = ControlaToDo;