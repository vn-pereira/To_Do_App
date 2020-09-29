const db = require("../BD/bc_dados");

//pegar as informações do banco 
class TarefasDAO { //a primeira letra das classes vem em maiúscula
    constructor (db){
        this._db = db;
    }

    listaTarefas(callback){ 
        this._db.all("select * from TAREFAS", [], (err, row) =>{ 
            callback(err, row)
            
        })
    }
    //adicionar a tarefa através do POST
    adicionarTarefa(requisicao, callback){
        this._db.run(`INSERT INTO TAREFAS (titulo, descricao) 
        VALUES (?, ?)`, [requisicao.body.titulo, requisicao.body.descricao],
        (err)=> {
            throw err;
        });
        
        this._db.all("select * from TAREFAS", [], (err, row)=>{ //depois da inserção, mostrará todos os cards
            callback(err, row);  //mostrará o erro ou a resposta da req
        })
    }  
    //editar card tarefa através do put
    atualizaCard(requisicao, callback){
        this._db.run(`UPDATE TAREFAS SET titulo=?, descricao=?
        WHERE id_tarefas=?`,
        [requisicao.body.tituloEdit, requisicao.body.descricaoEdit, requisicao.body.editId], 
        (err)=>{
            callback(err);
        });

    }

    //deletar card através do delete
    deleteCard(requisicao, callback){
        this._db.run(`DELETE FROM TAREFAS WHERE id_tarefas = ?`, 
        [requisicao.body.id_tarefas], (err)=>{
            callback(err);
        });
    }
}

module.exports = TarefasDAO;