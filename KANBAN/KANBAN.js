const $modal = document.getElementById('modal');
const $descricaoInput = document.getElementById('descricao');
const $prioridadeInput = document.getElementById('prioridade');
const $idInput = document.getElementById("idInput");

const $AdicionarTarefa = document.getElementById("AdicionarTarefa");
const $EditarTarefa = document.getElementById('EditarTarefa');

const $salvar = document.getElementById("salvar");
const $salvarAlteracao = document.getElementById('salvarAlteracao');


const $colPreparativosBody = document.querySelector('#colPreparativos .body');

var listaTarefa = [];

function openModal(id){
    $modal.style.display = "flex";

    if (id) {
        $AdicionarTarefa.style.display = "none";
        $salvar.style.display = "none";

        $EditarTarefa.style.display = "block";
        $salvarAlteracao.style.display = "block";

        const index = listaTarefa.findIndex(function(tarefa) {
            return tarefa.id = id;
        });

        const task = listaTarefa[index];

        $idInput.value = tarefa.id;
        $descricaoInput.value = tarefa.descicao;
        $prioridadeInput.value = tarefa.prioridade;
    } else {
        $AdicionarTarefa.style.display = "block";
        $salvar.style.display = "block";

        $EditarTarefa.style.display = "none";
        $salvarAlteracao.style.display = "none";
    }
}

function closeModal(){
    $modal.style.display = "none";

    $idInput.value="";
    $descricaoInput.value="";
    $prioridadeInput.value="";

}

function gerarCard() {
    const listaTarefaHTML = listaTarefa.map(function(tarefa){
        return `
            <div class="card" ondblclick="openModal(${tarefa.id})">
                <div class="info">
                    <b>Descrição:</b>
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
        id: Math.floor(Math.random() * 999999),
        descicao: $descricaoInput.value,
        prioridade: $prioridadeInput.value,
    }

    listaTarefa.push(novaTarefa);

    closeModal();

    gerarCard();
}

function atualizarTarefa() {
    const newTarefa = {
        id: $idInput.value,
        descicao: $descricaoInput.value,
        prioridade: $prioridadeInput.value,
    }

    const index = listaTarefa.findIndex(function(tarefa) {
        return tarefa.id = id;
    });

}
