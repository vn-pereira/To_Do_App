//cabeçalho da requisição
function deleteCard(event){
    const header = new Headers();
    header.append("Content-Type", "application/json");
//console.log(event.target.parentNode.dataset.idTarefas);

    const estrutura = { method: 'DELETE',
                        headers: header,
                        mode: 'cors',
                        cache: 'default',
                        body: JSON.stringify(event.target.parentNode.dataset.idTarefas) };

    fetch('http://localhost:3000/', estrutura)
    .then(console.log('requisiçao deletada com sucesso'))
    .catch((err) =>{
            err;
    })
}