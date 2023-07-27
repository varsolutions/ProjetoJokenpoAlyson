var Usuario = 0
var Pc = 0


const imgUser = document.getElementById("user")
const imgPc = document.getElementById("pc")
const jogar = document.getElementById("jogar")
const contador = document.getElementById("contador")

var player1 = ""
var player2 = ""

playing.addEventListener("click", () => {
    reset()
    playPc()
})


function reset() {
    player1 = document.querySelector('input[name="play"]:checked').value
    imgUser.innerHTML = "<img src='./imagens/" + player1 + ".png'>"
    imgPc.innerHTML = ""
}

function playPc() {
    let opt = ['pedra', 'Papel', 'Tesoura']
    let num = Math.floor(Math.random() * (2 - 0 + 1)) + 0;
    player2 = opt[num]
    imgPc.innerHTML = "<img src='./imagens/" + player2 + ".png'>"
    analyze()
}

function analyze() {


    let ganhar = "0"





    if (player1 == player2) {

    } else if (player1 == 'pedra') {
        ganhar = player2 == 'Tesoura' ? 1 : -1


    } else if (player1 == 'Papel') {
        ganhar = player2 == 'pedra' ? 1 : -1


    } else if (player1 == 'Tesoura') {
        ganhar = player2 == 'Papel' ? 1 : -1
    }




    if (ganhar == 0) {

    } else if (ganhar > 0) {
        Usuario = Usuario + 1

    } else {
        Pc = Pc + 1
    }


    contador.innerHTML = Usuario + ":" + Pc



}
