/*Crie uma constante chamada myName e atribua a ela o seu nome (Exemplo: Carolina).
Crie uma constante chamada birthCity e atribua a ela a sua cidade natal.
Crie uma variável let chamada birthYear e atribua a ela o ano em que você nasceu.
Utilize o console.log() para imprimir as constantes e variáveis que você criou.
Altere o valor atribuído à variável birthYear para 2030. Faça um console.log(birthYear) novamente para ver o que acontece!
Altere o valor atribuído à constante birthCity. Faça um console.log(birthCity) novamente! Você saberia explicar por que recebemos uma mensagem de erro? 🤔*/

const myName = 'Thiago Freire de Oliveira';
const birthCity = 'São Paulo';
//birthCity = 'Los Angeles' //********NÃO É PERMITIDO MUDAR CONSTANTES******//
let birthYear = 1988;
birthYear = 2030; // ************Alterando ano********** //
console.log(' Me chamo ' + myName + ', nasci na cidade de ' + birthCity + ' e meu ano de nascimento é ' + birthYear);


/*Vamos fazer algumas operações simples para encontrarmos a área e o perímetro de um retângulo de base 5 e altura 8.

Crie uma constante chamada base e atribua a ela o valor 5.
Crie uma constante uma chamada heigth e atribua a ela o valor 8.
Crie uma constante chamada area e atribua a ela o resultado da multiplicação da base pela heigth. Dica: lembre-se de usar sempre o console.log() para imprimir as variáveis e checar os resultados das operações!
Crie uma constante chamada perimeter e atribua a ela a soma de todos os lados do retângulo.*/

const base = 5;
const heigth = 8;
const area = (base * heigth);
const perimeter = 26;

console.log (base);
console.log (heigth);
console.log (area);
console.log (perimeter);

/*Criar estruturas condicionais com operadores if/else e operadores lógicos será algo muito comum na sua carreira de pessoa desenvolvedora. Então vamos praticar essa habilidade tão importante?

Crie uma constante que receba a nota de uma pessoa candidata em um desafio técnico, e atribua a ela um valor entre 1 e 100;
Implemente uma lógica que verifique se a pessoa candidata foi aprovada, reprovada ou se essa pessoa está na lista de espera. Para isso, considere as seguintes informações:
Se a nota for maior ou igual a 80, imprima “Parabéns, você faz parte do grupo das pessoas aprovadas!”
Se a nota for menor que 80 e maior ou igual a 60, imprima “Você está na nossa lista de espera”
Se a nota for menor que 60, imprima “Infelizmente, você reprovou.”
Crie uma estrutura condicional utilizando o if, else if e else para criar o seu algoritmo, e os operadores lógicos que se aplicam a cada situação.
Altere o valor da nota para verificar se as condições que você implementou funcionam.*/

const notaPessoaCandidata = 80;

if (notaPessoaCandidata >= 80) {
    console.log("Parábens , você faz parte do grupo das pessoas aprovadas!");

} else if (notaPessoaCandidata <80 && notaPessoaCandidata >= 60) {
    console.log(" Você está na nossa lista de espera ");

} else  {
    console.log("Infelizmente, você reprovou.");

}

/*Nos exercícios de hoje, você vai elaborar alguns códigos de acordo com o que é pedido no enunciado. Todos trabalham a lógica condicional (if/else e switch/case), operadores aritméticos (+, -, *, /, %) e operadores lógicos (>, <, &&, ||). Para que consiga executar seus códigos, recomendamos que utilize a extensão Code Runner. Você pode ver mais sobre ela no conteúdo que fizemos sobre o uso do VS Code.

Elabore alguns códigos e imprima o resultado no console usando o console.log, um para cada operação aritmética básica. Seu código deve ter duas constantes, a e b, definidas no começo com os valores que serão operados. Escreva códigos para:
Adição (a + b)
Subtração (a - b)
Multiplicação (a * b)
Divisão (a / b)
Módulo (a % b)*/

const a = 15;
const b = 5;

console.log ('A soma é ' + (a + b));
console.log('A subtração é ' + (a - b));
console.log ('A multiplicação é ' + (a + b));
console.log ('A divisão é ' + (a/b));
console.log ('A Módulação é ' + (a % b));


/*Utilize if/else para escrever um código que retorne o maior de dois números. Defina, no começo do seu código, duas constantes com os valores que serão comparados.*/

const numero1 = 23;
const numro2 = 40;

if (numero1 < numro2) {
    console.log (numero1 + ' é menor que o número ' + numro2);
} else if (numro2 > numero1) {
    console.log (numero2 + ' é maior que o ' + numero1)
} else {
    console.log ('Operação inválida!');
}

/*Utilize if/else para escrever um código que retorne o maior de três números. Defina, no começo do seu código, três constantes com os valores que serão comparados.*/

const numeroA = 30;
const numeroB = 45;
const numeroC = 12;

if (numeroA > numeroB && numeroC) {
    console.log (numeroA + 'não é o maior número ');
} else if (numeroB > numeroA && numeroC) {
    console.log (numeroB + ' é o maior número! ');
} else if (numeroC > numeroA && numeroB) {
    console.log (numeroC + ' não é o maior número ' );
} else {
    console.log ('Porfavor digite uma opção válida');
}

/*Utilize if/else para escrever um código que, dado um valor recebido como parâmetro, retorne “positive” se esse valor for positivo, “negative” se for negativo, e caso não seja nem positivo e nem negativo retorne “zero”.*/

let valor1 = 6;

if (valor1 > 0) {
    console.log (' Valor positivo');
} else if (valor1 < 0) {
    console.log (' valor negativo ');
} else {
    console.log ('zero');
}

/*Utilize if/else para escrever um código que defina três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false, caso contrário. Se algum ângulo for inválido, você deve retornar uma mensagem de erro.
Para os ângulos serem de um triângulo válido, a soma dos três deve ser 180 graus.

Um ângulo será considerado inválido se não tiver um valor positivo.*/

const anguloX = 100;
const anguloY = 60;
const anguloZ = 20;

let somaDosAngulos = anguloX + anguloY + anguloZ;

let angulosPositivos = anguloX > 0 && anguloY > 0 && anguloZ > 0;

if(angulosPositivos){
  if (somaDosAngulos === 180) {
    console.log(true);
  } else {
    console.log(false);
  };
} else {
  console.log('Erro: ângulo inválido');
}