let palpiteDeNumero = Number(prompt("Advinhe o número que estou pensando... está entre 0 e 10!"));
let numeroAleatorio = Math.floor(Math.random() * 11)
let tentativas = 0;

/*if(palpiteDeNumero === numeroAleatorio){
    alert("Parabéns! Você advinhou o número em ",' ', "tentativas")
}else{
    alert("Erro! Tente novamente!")
}
*/
while(palpiteDeNumero!== numeroAleatorio){
    palpiteDeNumero = Number(prompt("Erro,tente novamente!"))
    tentativas++
}

alert("Parabéns! Você advinhou o número em" + tentativas + "tentativas")
