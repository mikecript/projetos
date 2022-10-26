
const form = document.querySelector('#formulario');


function criaParagrafo() {
    const p = document.createElement('p');
    return p;

}


form.addEventListener('submit', function (e){
    e.preventDefault();
    const inputPeso = e.target.querySelector('#ipeso');
    const inputAltura = e.target.querySelector('#ialtura');
    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);

    if (!peso) {
        setResultado('Peso Inválido', false);
        return;
    }

    if (!altura){
        setResultado('Altura Inválida', false);
        return;
    }

    if (peso > 600) {
        setResultado('Peso Inválido', false);
        return;
    }

    if (altura > 3) {
        setResultado('Altura Inválida', false);
        return;
    }

    const imc = getImc(peso,altura);
    const nivelImc = getNivelImc(imc) 
    const msg = `Seu imc é ${imc} (${nivelImc}).`
    setResultado(msg, true)
    console.log(imc, nivelImc)

})

function getNivelImc(imc) {
    const nivel = ['Abaixo do peso','Peso normal','Sobrepeso','Obesidade grau 1','Obesidade grau 2','Obesidade grau 3'];


    if (imc >= 39.9) {
        return nivel[5]
    };

    if (imc >= 34.9) {
        return nivel[4]
    };

    if (imc >= 29.9){
        return nivel[3]
    };

    
    if (imc >= 24.9) {
        return nivel[2]
    };

    
    if (imc >= 18.5) {
        return nivel[1]
    };

    if (imc < 18.5){
        return nivel[0]
    };


}
    
function getImc(peso,altura) {
    const imc = peso / (altura ** 2);
    return imc.toFixed(1);
}

function setResultado(msg, isValid) {
    const resultado = form.querySelector('#resultado');
    resultado.innerHTML = '';
    const p = criaParagrafo();
    
    if (isValid) {
        p.classList.add('paragrafoResultado');
    }
    else {
        p.classList.add('bad')
    }

    p.innerHTML = msg;
    resultado.appendChild(p);
}