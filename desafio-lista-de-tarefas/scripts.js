const textoInput = document.querySelector('.valorTexto')
const botaoAdicionar = document.querySelector('.botaoAdicionar')
const ulContainer = document.querySelector('.ulContainer')
let li;

textoInput.addEventListener('keypress', function(e) {
    if (e.keyCode === 13) {
        if (!textoInput.value) return;
        criaTarefa(textoInput.value)
        limpaInput()
    }
})

function criaLi() {
    li = document.createElement('li');
    return li;
}

function limpaInput() {
    textoInput.value = '';
    textoInput.focus();
}

function apagarTarefaBotao(li) {
    li.innerHTML += ' '
    const botaoApagar = document.createElement('button')
    botaoApagar.innerText = 'Apagar'
    botaoApagar.setAttribute('class', 'apagar')
    botaoApagar.setAttribute('title', 'Apagar esta Tarefa')
    li.appendChild(botaoApagar)
}


function criaTarefa(textoInput) {    
    //Cria um elemento/Item de lista(LI)

    li = criaLi();
    //

    //Adiciona um LI com o valor do input na lista não ordenada
    const TextoDoLi = document.createTextNode(textoInput);
    li.appendChild(TextoDoLi);
    ulContainer.appendChild(li);
    //

    apagarTarefaBotao(li)
    salvarTarefas()
    limpaInput()
}

function salvarTarefas() {
    const liTarefas = ulContainer.querySelectorAll('li');
    const listaDeTarefas = [];

    for (let tarefa of liTarefas){
        let tarefaTexto = tarefa.innerText;
        tarefaTexto = tarefaTexto.replace('Apagar', '').trim()
        listaDeTarefas.push(tarefaTexto);
    }
    const tarefasJSON = JSON.stringify(listaDeTarefas)
    localStorage.setItem('tarefas', tarefasJSON);
}


function adicionaTarefasSalvas() {
    const tarefas = localStorage.getItem('tarefas')
    const listaTarefas = JSON.parse(tarefas)
    console.log(listaTarefas)

    for (let tarefa of listaTarefas){
        criaTarefa(tarefa)
    }
}

adicionaTarefasSalvas()


botaoAdicionar.addEventListener('click', function (e) {
    e.preventDefault()

    if (!textoInput.value) return;

    criaTarefa(textoInput.value)

})


document.addEventListener('click', function (e) {
    const elemento = e.target;

    if (elemento.classList.contains('apagar')) {
        elemento.parentElement.remove();
        salvarTarefas()
    }
})



