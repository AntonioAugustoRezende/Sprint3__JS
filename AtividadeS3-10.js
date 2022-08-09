//EXERCICIO 1

let meuNome = "Antonio"
let comprimentoMeuNome = meuNome.length

console.log(`O meu nome possui ${comprimentoMeuNome} caracteres de comprimento`)

//EXERCICIO 2

let preco = 15.00
let precoFormatado = "R$" + " " + preco

console.log(`O valor ${preco} formatado ficaria assim: ${precoFormatado}`)

//EXERCICIO 3

let cumprimento = "Bom dia"
let nome = "Antonio"
let sobrenome = "Rezende"
//let mensagemCumprimento = cumprimento + "," + " " + nome + " " + sobrenome ---> Usando ""
let mensagemCumprimento = (`${cumprimento}, ${nome} ${sobrenome}`) // ----> Usando o Template String
console.log(mensagemCumprimento)

