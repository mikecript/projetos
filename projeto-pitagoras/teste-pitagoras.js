//const catetoA = Number(window.prompt('Cateto A: '));
//const catetoB = Number(window.prompt('Cateto B: '));
// (catetoA ** 2) + (catetoB ** 2);
function meuProjetoHipotenusa(e) {
    
const form = document.body.querySelector('#formulario')
const catetoA = form.querySelector('#icatetoA');
const catetoB = form.querySelector('#icatetoB');
const resultado = form.querySelector('#hipotenusaValor')



function recebeEventoHipotenusa(e) {
    e.preventDefault();
    const hipotenusaCalc = (Number(catetoA.value) ** 2) + (Number(catetoB.value) ** 2);
    return resultado.innerHTML += `<h2 class="resultadoDaConta">Sua hipotenusa será ${Math.sqrt(hipotenusaCalc)}</h2>`
    

   
}
    form.addEventListener('submit', recebeEventoHipotenusa)
};


meuProjetoHipotenusa();

