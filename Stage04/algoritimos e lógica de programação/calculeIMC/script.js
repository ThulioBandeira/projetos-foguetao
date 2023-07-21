const patients = [
    {
        name:'Luiz',
        age:20,
        weight:100,
        height:190,
    },
    {
        name:'Alexandra',
        age:27,
        weight:70,
        height:170,
    },
    {
        name:'Carlos',
        age:42,
        weight:90,
        height:180,
    },
];

const patientNames = [];

/*for(let index = 0; index < patients.length; index++){
    patientNames[index] = patients[index].name
}
*/
for (let patient of patients){
    patientNames.push(patient.name)
}

function printIMC(patient){

    return `O paciente ${patient.name} possui o IMC de :
${
    (patient.weight/((patient.height/100) **2)).toFixed(2)
} `

}

for(let patient of patients){
    alert(printIMC(patient))
}