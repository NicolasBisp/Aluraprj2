const avanca = document.querySelectorAll('.btn-proximo');

avanca.forEach(button => {
    button.addEventListener('click', function(){
        const atual = document.querySelector('.categoria')
        const novo = document.querySelector('.trajetoria')
        const proximoPasso = 'passo' + this.getAttribute('data-proximo');

        atual.classList.remove('.categoria')
        novo.classList.remove('.trajetoria')
        document.getElementById(proximoPasso).classList.add('.categoria', '.trajetoria')
    })
})