/*function criaCalculadora() {
    
    return {
        display: document.querySelector('#display'),
        btnClear: document.querySelector('.btn-clear'),
        btnDel: document.querySelector('.btn-del'),
        btnEq: document.querySelector('.btn-eq'),

        

        inicia: function(){
            this.cliqueBotoes()
            this.pressionaEnter()
        },

        pressionaEnter(){
            this.display.addEventListener('keyup', e => {
                if(e.keyCode === 13){
                this.realizaConta() }})},

        realizaConta(){
            let conta = this.display.value;
            try {
               conta = eval(conta)

               if(!conta){
                alert('conta inválida')
                return;
               }
               this.display.value = String(conta);
            } 
            catch (e) {
                alert('Conta inválida')
                return;
            }
        },

        clearDisplay(){
            this.display.value = '';
        },

        apagaUm(){
            this.display.value = this.display.value.slice(0, -1)
        },



        cliqueBotoes(){
            document.addEventListener('click', function(e){
                const elemento = e.target;

                if(elemento.classList.contains('btn-num')){
                    this.btnParaDisplay(elemento.innerText)
                }

                if(elemento.classList.contains('btn-clear')){
                this.clearDisplay(elemento.innerText);
                }

                if(elemento.classList.contains('btn-del')){
                this.apagaUm()
                }

                if(elemento.classList.contains('btn-eq')){
                this.realizaConta()
                }

            }.bind(this))},

        btnParaDisplay(valor){
            this.display.value += valor;
        }
    }

}

const calculadora = criaCalculadora()
calculadora.inicia()*/


function Calculadora () {
    this.display = document.querySelector('.display')
    this.btnClear = document.querySelector('.btn-clear')
    this.btnDel = document.querySelector('.btn-del')
    this.btnEq = document.querySelector('.btn-eq')

    this.capturaClicks = () => {
        document.addEventListener('click', e => {
            const elemento = e.target;
            if(elemento.classList.contains('btn-num')){
                this.adicionaNumeroNoDisplay(elemento)
            }

            if(elemento.classList.contains('btn-clear')){
            this.clear()}

            if(elemento.classList.contains('btn-del')){
            this.delete();
            }

            if(elemento.classList.contains('btn-eq')){
            this.resultado()
            }
        })
    };


    this.clear = () => this.display.value = '';

    this.delete = () => this.display.value = this.display.value.slice(0, -1);

    this.resultado = () => {
        const conta = eval(this.display.value);

            try {

            if(!conta) {
                alert('conta inválida')
                return;
            }

            this.display.value = String(conta);

            } catch (error) {
                alert('conta inválida')
                return;
            }
    

        }

    this.adicionaNumeroNoDisplay = function (elemento){ 
        this.display.value += elemento.innerText;
        this.display.focus()
    }

    this.inicia = function(){this.capturaClicks(); this.capturaEnter()};

    this.capturaEnter = () => {
        this.display.addEventListener('keypress', e => {

            if(e.keyCode === 13){
                this.resultado();
                return;} 
        }
    )}

    
    
}

const calculadora = new Calculadora();
calculadora.inicia();
