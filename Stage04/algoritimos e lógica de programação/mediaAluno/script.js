let nome = prompt("Digite o seu nome:");
alert("Olá," + nome);
let nota1 = Number(prompt("Digite sua primeira nota: "));
let nota2 = Number(prompt("Digite sua segunda nota: "));
let nota3 = Number(prompt("Digite sua terceira nota: "));
let resultado = (nota1+nota2+nota3)/3;

if(resultado>=6){
    alert(`Parabéns, ${nome}. Você tirou ${resultado} e não fez mais que a sua obrigação !`)
}else{
    alert(`Carai,menor. Tu tirou um ${resultado}, tu é muito burro kkk`)
}

