const fechado = document.getElementById('fechado')
const convite = document.getElementById('convite')
const texto = document.getElementById('texto')
const brilho = document.getElementById('brilho')

fechado.addEventListener('click', () => {
    fechado.style.display = 'none'
    texto.style.display = 'none'

    brilho.style.opacity = '1'

    setTimeout(() => {
        brilho.style.opacity = '0'

        setTimeout(() => {
            convite.style.display = 'block'
            setTimeout(()=> {
                convite.classList.add('ativo')
            }, 50)
        }, 300)
    }, 300)
})