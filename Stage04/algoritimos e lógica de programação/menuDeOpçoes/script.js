let option;
let items = [];

while (option != 3) {

  option = Number(prompt(`
    Olá, usuário! Digite o número da opção desejada
        
    1. Cadastrar um item na lista.
    2. Mostrar ítens cadastrados.
    3. Sair do programa.
    `));

    switch(option){
        case 1:
            items.push(prompt("Digite o nome do item"))
        break;

        case 2:
            if (items.length === 0) {
                alert("Não existem itens cadastrados");
              } else {
                alert(items);
              }                        
        break;

        case 3:
            alert("Tchau!")
            break;
        default:
            alert("Opção inválida!")
    }

  
  /*if (option === 1) {
    items.push(prompt("Digite o nome do item"))
  } else if (option === 2) {
    if (items.length === 0) {
      alert("Não existem itens cadastrados");
    } else {
      alert(items);
    }
  } else {
    alert("Tchau");
  }
  */
}
