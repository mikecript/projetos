'use strict'
//fetch(url).then(responde => responde.json()).then(console.log)
//cep.length == 8 && /^[0-9]+$/.test(cep)
const preencherFormulario = (endereco) => {
    document.querySelector('#endereco').value = endereco.logradouro;
    document.querySelector('#bairro').value = endereco.bairro;
    document.querySelector('#cidade').value = endereco.localidade;
    document.querySelector('#estado').value = endereco.uf;

 
}

const cepValido = (cep) => true;

const pesquisarCep = async() => {
    const cep = document.querySelector('#cep');
    const url = `http://viacep.com.br/ws/${cep.value}/json/`;
if (cepValido(cep)) {
        const dados = await fetch(url)
        const endereco = await dados.json()

    if (endereco.hasOwnProperty('erro')) {
        document.querySelector('#endereco').value = 'CEP não encontrado';
        } 
    else {
        preencherFormulario(endereco)
    }

}else{
    document.querySelector('#endereco').value = 'CEP Incorreto!';
    }

}
document.querySelector('#cep').addEventListener('focusout', pesquisarCep)
