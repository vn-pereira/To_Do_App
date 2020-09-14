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
    adicionarTarefa(titulo, descricao){
        this._db.run("INSERT INTO TAREFAS", [titulo, descricao])
    }  
}

module.exports = TarefasDAO;