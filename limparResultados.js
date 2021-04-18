const btnLimpar = document.querySelector('#limpar')
btnLimpar.addEventListener('click', () => {
    document.querySelector('#resultado')
        .innerHTML = ''
})