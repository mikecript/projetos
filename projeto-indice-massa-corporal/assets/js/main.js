// peso / altura ** altur
function imcGeral(e) {
    const form = document.querySelector('#formulario')
    const peso = document.querySelector('#ipeso')
    const altura = document.querySelector('#ialtura')
    const resultado = document.querySelector('#resultado')

    function calculoImc(e) {
        const imc = Number(peso.value) / Number((altura.value ** 2))
        e.preventDefault();

        if (imc < 18.5) {
            resultado.innerHTML += `<p class="imcResultado">Seu Imc é de ${imc.toFixed(1)} e você está abaixo do peso</p>`
        }
        else if (imc >= 18.5 && imc <= 24.9) {
            resultado.innerHTML += `<p class="imcResultado">Seu Imc é de ${imc.toFixed(1)} e você está com o peso normal</p>`
        }

        else if (imc >= 25 && imc <= 29.9) {
            resultado.innerHTML += `<p class="imcResultado">Seu Imc é de ${imc.toFixed(1)} e você está com sobrepeso<p/>`
        }

        else if (imc >= 30 && imc <= 34.9) {
            resultado.innerHTML += `<p class="imcResultado">Seu Imc é de ${imc.toFixed(1)} e você possui obesidade (grau 1)</p>`
        }

        else if (imc >= 35 && imc <= 39.9) {
            resultado.innerHTML += `<p class="imcResultado">Seu Imc é de ${imc.toFixed(1)} e você possui obesidade (grau 2)</p>`
        }

        else if (imc > 40) {
            resultado.innerHTML += `<p class="imcResultado">Seu Imc é de ${imc.toFixed(1)} e você possui obesidade (grau 3)</p>`
        }
        else{
            resultado.innerHTML += `<p class="imcResultado">Não identificamos valores necessarios para o sistema</p>`
        }
    }
    form.addEventListener('submit', calculoImc)
}

imcGeral();