const db = require("../BD/bc_dados");

//pegar as informações do banco 
class TarefasDAO { //a primeira letra das classes vem em maiúscula
    constructor (db){
        this._db = db;
    }
 //adicionando assincronicidade (Promise)
    listaTarefas(){ 
        return new Promise ((resolve, reject)=>{
            this._db.all("select * from TAREFAS", [], (err, row) =>{ 
               if(err){
                    reject(`Falha no carregamento de dados ${err}`);
               }else{
                    resolve(row);
               }      
            })
        })
    }
    //adicionar a tarefa através do POST
    adicionarTarefa(requisicao){
        return new Promise((resolve, reject)=>{
            this._db.run(`INSERT INTO TAREFAS (titulo, descricao) 
        VALUES (?, ?)`, [requisicao.body.titulo, requisicao.body.descricao],
        (err)=> {
            if(err){ 
                reject(`Falha na inserção de dados ${err}`);
            }else{
                resolve('Card adicionado com sucesso');
            }
        })
      });  
    }  

    //editar card tarefa através do put
    atualizaCard(requisicao){
        return new Promise((resolve, reject)=>{
            this._db.run(`UPDATE TAREFAS SET titulo=?, descricao=? WHERE id_tarefas=?`,
        [requisicao.body.tituloEdit, requisicao.body.descricaoEdit, requisicao.body.editId], 
            (err)=>{
                if(err){
                    reject(`Deu erro ${err}`);
                }else{
                    resolve(`Card atualizado com sucesso`)
                }
             })          
        });
    }

    //deletar card através do delete
    deleteCard(requisicao){
        return new Promise((reject, resolve)=>{
            this._db.run(`DELETE FROM TAREFAS WHERE id_tarefas = ?`, 
        [requisicao.body.id_tarefas], (err)=>{
            if(err){
                reject(`Tente novamente ${err}`);
            }else{
                resolve(`Card deletado com sucesso`);
            }
        })
     });
    }
}

module.exports = TarefasDAO;