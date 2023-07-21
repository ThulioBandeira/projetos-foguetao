let numberOne = Number(prompt("Digite um número: "));
let numberTwo = Number(prompt("Digite um número: "));

if(numberOne===numberTwo){
    alert(`Os dois números são iguais`)
}else{
    alert(`Os dois números são diferentes`)
}

alert(`${numberOne} + ${numberTwo} = ${numberOne+numberTwo}`)
alert(`${numberOne} - ${numberTwo} = ${numberOne-numberTwo}`)
alert(`${numberOne} * ${numberTwo} = ${numberOne*numberTwo}`)
alert(`${numberOne} / ${numberTwo} = ${numberOne/numberTwo}`)
alert(`${numberOne} % ${numberTwo} = ${numberOne%numberTwo}`)
/*parte adicional*/

if( (numberOne + numberTwo)%2===0){
    alert(`A soma dos dois números é ${numberOne+numberTwo} : PAR`)
}else{
    alert(`A soma dos dois números é ${numberOne+numberTwo} : ÍMPAR`)
}