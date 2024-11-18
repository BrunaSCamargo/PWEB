const $modal = document.getElementById('modal');
const $descricaoInput = document.getElementById('descricao');
const $prioridadeInput = document.getElementById('prioridade');

const $colPreparativosBody = document.querySelector('#colPreparativos .body');

var listaTarefa = [];

function openModal(){
    $modal.style.display = "flex";
}

function closeModal(){
    $modal.style.display = "none";

    $descricaoInput.value="";
    $prioridadeInput.value="";

}

function gerarCard() {
    const listaTarefaHTML = listaTarefa.map(function(tarefa){
        return `
            <div class="card">
                <div class="info">
                    <span>${tarefa.descicao}</span>
                </div>

                <div class="info">
                    <b>Prioridade:</b>
                    <span>${tarefa.prioridade}</span>
                </div>
            </div>
        `;
    });

    $colPreparativosBody.innerHTML = listaTarefaHTML.join('');
}

function criarTarefa() {
    const novaTarefa = {
        descicao: $descricaoInput.value,
        prioridade: $prioridadeInput.value,
    }

    listaTarefa.push(novaTarefa);

    closeModal();

    gerarCard();

    alert(listaTarefa);
}
