
const next = document.querySelector(".nextpage")
const back = document.querySelector(".backpage")
const fundo = document.querySelectorAll(".corpotudo")

console.log(next)
let pagina = 0

next.onclick = proximaPagina
back.onclick = voltarPagina

function proximaPagina(){
    pagina = pagina + 1

    if ( pagina == 1){
        fundo[1].style.display = "block"
        fundo[0].style.display = "none"
        back.style.display = "block"
        next.style.margin = 0
        }
        if ( pagina == 2){
            fundo[2].style.display = "block"
            fundo[1].style.display = "none"
            back.style.display = "block"
            next.style.display = "none"
        }
}


function voltarPagina(){
    pagina = pagina - 1
    console.log(pagina)

    if ( pagina == 0){
        fundo[0].style.display = "block"
        fundo[1].style.display = "none"
        back.style.display = "none"
        next.style.display = "block"
        next.style.marginLeft = "95%"
    }
        if ( pagina == 1){
            fundo[1].style.display = "block"
            fundo[2].style.display = "none"
            back.style.display = "block"
            next.style.display = "none"
        }
}
