class TarefasDAO { //a primeira letra das classes vem em maiúscula
    constructor (db){
        this._db = db;
    }

    listaTarefas(callback){ 
        this._db.all("select * from TAREFAS", [], (err, row) =>{ 
            callback(err, row)
            
        })
    }
}

module.exports = TarefasDAO;