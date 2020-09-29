//cabeçalho da requisição
function deleteCard(event){
    const header = new Headers();
    header.append("Content-Type", "application/json");
    const card = event.target.parentNode.parentNode.parentNode;
    const estrutura = { method: 'DELETE',
                        headers: header,
                        mode: 'cors',
                        cache: 'default',
                        body: JSON.stringify({id_tarefas: event.target.parentNode.dataset.idTarefas}) };
                        

    fetch('http://localhost:3000/', estrutura)
    .then(console.log('requisiçao deletada com sucesso'))
    .then(card.remove())
    .catch((err) =>{
            err;
    })
}