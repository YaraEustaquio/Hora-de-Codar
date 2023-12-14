function inicio(){
    let escolha = parseInt(prompt('Selecione um Serviço: \n 1.) Cadastro Estudantes \n 2.) Planetas \n 3.) lista de compras'));
    switch(escolha){
        case 1:
            cadastroEstudantes();
            break;
        case 2:
            planetas();
            break;
        case 3:
            lista_de_compras();
            break;
    }
}

function cadastroEstudantes(){
    let estudantes = [];

    while (true){
        let nomeEstudante = prompt('Digite o nome do estudante. digite "PARE", para cancelar');
        estudantes.push(nomeEstudante);

        if(nomeEstudante == 'PARE'){
            alert('Programa finalizado');
            break;
        }
    }

    let qntdEstudantes = estudantes.length - 1;
    estudantes.pop();

    alert('Quantidade de estudantes cadastrados: ' + qntdEstudantes);
    alert('Lista de estudantes: ' + estudantes);
    inicio();
}

function planetas(){
    const listPlanets = ['Terra', 'Marte', 'Plutão', 'Vênus', 'Júpiter', 'Saturno'];
    let pesquisaPlaneta = prompt('Digite um nome de um planeta: ');

    //Verifica se o prompt do User está contido no array listPlanetas 
    if(listPlanets.includes(pesquisaPlaneta)){
        alert('Planeta ' + pesquisaPlaneta + ' encontrado dentro do array');
        inicio();
    }else{
        alert('Planeta não encontrado!');
        inicio();
    }
}

function lista_de_compras(){
    let frutas = ['Maça', 'Banana', 'Morango', 'Abacate', 'Uva', 'Pera', 'Laranja', 'Amora'];
    
    while(frutas.length > 0){
        let pesquisar = prompt('Digite o nome de uma fruta: ');
        
        if(frutas.includes(pesquisar)){
            /*splice() - Serve para remover ou modificar o conteúdo de um Array 
            e "1" é a quantidade de elementos que serão removidos */
            //indexOf() - Encontra o indice de uma elemento específico dentro de um Array
            frutas.splice(frutas.indexOf(pesquisar), 1);
            alert('A fruta foi retirada da lista');
        }
        else{
            alert('Fruta indisponível no nosso mercado');
        }
    }
    alert('Lista de compras finalizada');
    inicio();

}

inicio();