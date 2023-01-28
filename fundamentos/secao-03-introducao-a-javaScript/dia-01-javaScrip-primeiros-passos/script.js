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

