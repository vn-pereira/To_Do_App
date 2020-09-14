const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('banco_dados');

db.run("CREATE table IF NOT EXISTS USUARIOS(nome VARCHAR(255), sobrenome VARCHAR(255), email VARCHAR(255), senha VARCHAR(255), tarefas_id int)");
/*status_id = 1- fazer, 2- fazendo, 3-fiz*/ 
db.run("CREATE table IF NOT EXISTS TAREFAS(titulo VARCHAR(255), descricao VARCHAR(255), tipo VARCHAR(255), grau_prioridade int, tempo_expiracao datetime, status_id int)");

db.run("CREATE table IF NOT EXISTS STATUS(nome_status VARCHAR(255))");

/*db.run("INSERT into TAREFAS(titulo, descricao, grau_prioridade, tempo_expiracao, status_id) VALUES ('Academia', 'malhar para ficar fitness', 'importante', '1 dia', '1')");

db.run("INSERT into TAREFAS(titulo, descricao, grau_prioridade, tempo_expiracao, status_id) VALUES ('Dormir', 'sono da beleza', 'importante', '1 dia', '2')");

db.run("INSERT into TAREFAS(titulo, descricao, grau_prioridade, tempo_expiracao, status_id) VALUES ('tomar café', 'encher a pança', 'importante', '1 dia', '1')");

db.all('SELECT * FROM TAREFAS WHERE titulo like ?', ['Academia'],(err, row) => {
console.log(row);
});*/

db.all('SELECT*FROM TAREFAS WHERE titulo like ? OR titulo like ?',["Academia", "Dormir"], (err, row) => {
console.log(row);
});

module.exports = db;