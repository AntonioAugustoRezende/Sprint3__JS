//EXERCICIO 01

let idade = 15
let avaliarIdade = (idade > 18 && idade < 25)

if (avaliarIdade) {
    console.log("A idade está entre 18 e 25")
} else {
    console.log("A idade não está entre 18 e 25")
}


//EXERCICIO 2 
let carroNome = "Chevrolet"
let carroAno = 2019
let filtrarCarro = carroNome == "Chevrolet" && carroAno == 2019


console.log(filtrarCarro)

if (filtrarCarro) {
    console.log("Carro encontrado")
} else {
    console.log("Carro não encontrado")
}

filtrarCarro ? console.log("Carro encontrado") : console.log("Carro não encontrado")


//EXERCICIO 3

let botaoMenu = false
let avaliarClick = botaoMenu !== false

avaliarClick ? console.log("Abrir Menu") : console.log("Fechar menu")