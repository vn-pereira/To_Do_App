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
            
            tarefasDAO.listaTarefas()
                .then((row)=>{//promessa
                    resposta.send(templateToDo(row));
                    console.log(row);
                })
                .catch((err)=>{
                    throw err; 
                });    
        }         
    }

    static adicionarCard(){
        return function (requisicao, resposta){
            const tarefasDAO = new TarefasDAO(db);

            tarefasDAO.adicionarTarefa(requisicao)
                .then((row)=>{
                    resposta.redirect('/');
                    console.log(row);
                })
                .catch((err)=>{
                    console.log(`Deu erro parça ${err}`);
                })
        }
    }

    static editarTarefa(){
      return function(requisicao, resposta){
          const tarefasDAO = new TarefasDAO(db);

          tarefasDAO.atualizaCard(requisicao)
            .then(()=>{
                console.log(requisicao.body);
                resposta.redirect('/');
            })
            .catch((err)=>{
                console.log(`${err}`); 
            })        
      }  
    }
    static deleteCard(){
        return function(requisicao, resposta){
            const tarefasDAO = new TarefasDAO(db);

            tarefasDAO.deleteCard(requisicao)
              .then((row)=>{
                  console.log(row);
                  resposta.send(console.log('Delete ok'));
              })
               .catch((err)=>{
                 console.log(`${err}`);
               }); 
        }
    }
}

module.exports = ControlaToDo;