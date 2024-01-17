const popup = document.querySelector(".popup")
const popup1 = document.querySelector("#pop-up-descubra-o-numero")
const popup2 = document.querySelector("#pop-up-api-buscar-cep")
const popup3 = document.querySelector("#pop-up-api-github")
const popup4 = document.querySelector("#pop-up-jogo-da-memoria")
const popup5 = document.querySelector("#pop-up-piano-digital")
const popup6 = document.querySelector("#pop-up-pokedex-api")

const allPopup = {
    1: popup1,
    2: popup2,
    3: popup3,
    4: popup4,
    5: popup5,
    6: popup6
}

function showpopup(x){
    x = allPopup[x]
    x.classList.add('active')
}

function closepopup(x){
    x = allPopup[x]
    x.classList.remove('active')
}