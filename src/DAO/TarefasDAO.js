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
        VALUES (?, ?)`, [requisicao.body.titulo, requisicao.body.descricao]);
        
        this._db.all("select * from TAREFAS", [], (err, row)=>{ //depois da inserção, mostrará todos os cards
            callback(err, row)  //mostrará o erro ou a resposta da req
        })
    }  
}

module.exports = TarefasDAO;