let estudantes = [
    {
        nome:"Thulio",
        primeiraProva:10,
        segundaProva:9,
    },
    {
        nome:"Maria",
        primeiraProva:8,
        segundaProva:9,
    },
    {
        nome:"João",
        primeiraProva:5,
        segundaProva:6,
    }
];

function calculadora(alunos){
    for(let i = 0 ; i<estudantes.length;i++){
        let verificaçaoMedia = ((estudantes[i].primeiraProva + estudantes[i].segundaProva)/2)>= 7;
        if (verificaçaoMedia){
            alert(`Passou`)
        }
        else{
            alert(`Não passou`)
        }
    }
    
}

calculadora(estudantes);