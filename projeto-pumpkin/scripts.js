//SELECIONAR ELEMENTOS QUE DEVEM SER ANIMADOS
//DEFINIR A CLASSE QUE É ADICIONADA DURANTE A ANIMAÇÃO
//CRIAR FUNÇAÕ DE ANIMAÇÃO
//VERIFICAR A DISTANCIA DA BARRA DE SCROLL E O TOPO DO SITE

const target = document.querySelectorAll(`[data-anime]`);
const animationClass = 'animate';

function animeScroll() {
    const windowTop = window.pageYOffset + (window.innerHeight * 3) / 4;
    target.forEach(function(element){

        if ((windowTop) > element.offsetTop) {
            element.classList.add(animationClass)
        }
        else {
            element.classList.remove(animationClass)
        }
        console.log(element.offsetTop)
    }) 
}

animeScroll();


if (target.length) {
    

window.addEventListener('scroll', function(){
    animeScroll();
})};