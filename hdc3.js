
//Escreva um algoritmo para ler 2 valores informados pelo usuário e se o segundo valor informado for igual ou menor que ZERO, deve ser lido um novo valor. Ou seja, para o segundo valor não pode ser aceito o valor zero, nem um valor negativo.  O seu programa deve imprimir o resultado da divisão do primeiro valor lido pelo segundo valor.
function exercícioUm(){
    var num = parseInt(prompt(`Informe o primeiro numero`));
    var num1 = parseInt(prompt(`Informe o segundo numero`));

    dividir();
    function dividir(){
    if (num1 <= 0) {
        num1 = parseInt(prompt(`Informe o segundo número novamento. Este não pode ser menor ou igual a 0`));
    dividir();
    }}

    var divisao = num / num1
    alert(`O valor da divisão de ${num} por ${num1} é ${divisao}`);
}

// Crie uma bomba relógio (usando somente código - para deixar claro!) cuja contagem regressiva vá de 30 a 0. Utilize "document.write" para escrever em tela e no final da repetição escreva "EXPLOSÃO".
function exercicioDois(){
    var inicio = 30;
    var final = 0;

    while (inicio >= final){
        document.write("<p> Faltam " + inicio + " segundos");
        inicio--;
    }

    document.write("<p> EXPLOSÃO")
}

//Escreva um algoritmo para imprimir os números de 1 (inclusive) a 10 (inclusive) em ordem decrescente.
function exercicioTres(){
    var valores = [];
        for(let num = 10; num >= 1; num--){
            valores.push(num)
        }
        alert(valores);
}

//Faça um algoritmo que calcule e escreva a média aritmética dos números inteiros entre 15 (inclusive) e 100 (inclusive).
function exercicioQuatro(){    
    var valores = []; 
    var soma = 0; 

    for (var i = 15; i <= 100; i++) {

        if (i >= 15 && i <=100){
            valores.push(i); 
            soma += i;
        }
    }
    var resul = soma / valores.length
    alert(`A média aritmetica entre 15 e 100 é: ${resul}`);
}

//Faça um algoritmo que calcule e escreva a média aritmética dos dois números inteiros informados pelo usuário e todos os números inteiros entre eles. Considere que o primeiro sempre será menor que o segundo.
function exercicioCinco(){
    primeiroNumero = parseInt(prompt(`Digite 1° número`));
    segundoNumero = parseInt(prompt(`Digite 2° número`));

    if (primeiroNumero >= segundoNumero) {
        alert("O primeiro número deve ser menor que o segundo.");
        exercicioCinco();
    } else {
        var soma = 0;
        valores = 0 
            for (let i = primeiroNumero; i <= segundoNumero; i++){
            soma += i;
            valores++;
        }
        var media = soma / valores;
        alert(`A média aritmetica é: ${media}`);
    }
}

//Considere que a nota de aprovação é 9,5. Logo após escrever a mensagem "Calcular a média de outro aluno Sim/Não?" e solicitar um resposta. Se a resposta for "S", o programa deve ser executado novamente, caso contrário deve ser encerrado exibindo a quantidade de alunos aprovados.
function exercicioSeis(){
    var quantidadeAprovados = 0; 
    function calcular(){
    var soma = 0;
    var quantidade = [];
    console.log(quantidadeAprovados);

        for(var i = 0; i <2; i++){
            var nota = parseFloat(prompt(`Qual foi a ${i +1}° nota`));
            quantidade.push(nota)
            soma += nota;  
        }   
        var media = soma / quantidade.length;
            if( media >= 9.5){
            quantidadeAprovados++;
            console.log(quantidadeAprovados);
        }
        
        alert(`A sua média final é ${media}`);
        

        function perguntar(){
        var novamente = prompt(`Calcular a média de outro aluno \n S/N?`)
            if (novamente === "N"){
                alert(`A quantidade de alunos aprovados: ${quantidadeAprovados}`)
            } else if(novamente === "S"){
                calcular();
            } else{
                alert("Não entendi")
                perguntar();
            }
    }
    perguntar();
    }
    calcular();
    }


// Escreva um algoritmo para ler as notas de avaliações de um aluno, calcule e imprima a média (simples) desse aluno. Só devem ser aceitos valores válidos durante a leitura (0 a 10) para cada nota. São 6 notas ao total.Caso o valor informado para qualquer uma das notas esteja fora do limite estabelecido, deve ser solicitado um novo valor ao usuário. 
function exercicioSete(){
var soma = 0; 
function avaliar(){
var valores = []; 
for (var i = 0; i < 6; i++) {
    var numero = parseFloat(prompt(`Digite o ${i + 1}º número:`)); 
    if (numero >= 0 && numero <=10){ 
        valores.push(numero); 
        
        soma += numero; 
        
    }else {
        alert(`Nota inválida! Será necessário informar suas notas novamente`)
        avaliar();
    }}
    var media = soma / valores.length; 
    alert(`A sua média é: ${media}`);
}
avaliar();
}

 //Ler um valor N e imprimir todos os valores inteiros entre 1 (inclusive) e N (inclusive). Considere que o N será sempre maior que ZERO.N  é um valor informado pelo usuário
function exercicioOito(){
var n = parseInt(prompt(`Informe um número`));
for (i = 1; i <= n; i++){
    document.write(`${i}, `);
}
}

//Escreva um algoritmo para imprimir os 10 primeiros números inteiros maiores que 100.
function exercicioNove(){
for (let i = 101; i <= 110; i++ ){
    document.write(`${i}, `)
}
}

//Escreva um programa para imprimir todas as tabuadas de 1 a N. N será informado pelo usuário.
function exercicioDez(){
function imprimirTabuadas() {
let n = parseInt(prompt("Informe um número para gerar as tabuadas até esse valor:"));
alert(`Abra o console`)
for (let i = 1; i <= n; i++) {
    console.log(`Tabuada de ${i}:`);
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} * ${j} = ${i * j}`);
    }
    console.log("                    ");
}
}
imprimirTabuadas();
}

//Escreva um programa em que o usuário informe 10 valores e escreva quantos desses valores lidos estão entre os números 24 e 42 (incluindo os valores 24 e 42) e quantos deles estão fora deste intervalo.
function exercicioOnze(){ 
var dentro = [];
var fora = [];

for (var i = 0; i <= 9; i++) {
    var numero = parseFloat(prompt(`Digite o ${i + 1}º número:`));  

if (numero >= 24 && numero <= 42) {
    dentro.push(numero)
} 

if (numero < 24 || numero > 42 ){
    fora.push(numero)   
}
}
alert(`Entre os números informados ${dentro.length} estão entre 24 e 42`)
alert(`${fora.length} estão fora desse intervalo`)
}
        

