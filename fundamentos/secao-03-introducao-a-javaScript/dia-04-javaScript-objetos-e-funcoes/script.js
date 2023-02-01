/*Vamos fazer alguns exercícios de fixação para consolidar os conhecimentos adquiridos! 😉

Crie uma variável player e atribua um objeto contendo as variáveis listadas abaixo:
Copiar*/

/*Acesse as chaves name, lastName e age, usando a sintaxe meuObjeto.chave, e concatene as suas informações para imprimir no console uma mensagem no seguinte formato: “A jogadora Marta Silva tem 34 anos de idade”.
Adicione ao objeto a chave bestInTheWorld, usando a sintaxe meuObjeto.chave = valor, e atribua a essa chave um array contendo as datas em que a jogadora Marta foi considerada a melhor do mundo.
Copiar
[2006, 2007, 2008, 2009, 2010, 2018]
Acesse a chave bestInTheWorld, usando a sintaxe meuObjeto['chave'], e faça um console.log no seguinte formato: “A jogadora Marta Silva foi eleita a melhor do mundo por 6 vezes”.
Acesse a chave medals, usando a sintaxe meuObjeto.chave, e faça um console.log no seguinte formato: “A jogadora possui 2 medalhas de ouro e 3 medalhas de prata”.*/

let name = 'Marta';
let lastName = 'Silva';
let age = 34;
let medals = { golden: 2, silver: 3 };

let player = {
    name: 'Marta',
    lastName: 'Silva',
    age: 34,
    medals : {
        golden: 2,
        silver: 3
    }

};



console.log (' A jogador ' + player.name + ' ' + player.lastName + ' tem ' + player.age + ' de idade');
console.log('A jogadora possui ' + player.medals.golden + ' medalhas de ouro e ' + player.medals.silver + ' medalhas de prata.');


let names = {
    person1: 'João',
    person2: 'Maria',
    person3: 'Jorge',
  };

  for (let key in names) {
    console.log ('Olá ' + names[key]);
  }


  let car = {
    model: 'A3 Sedan',
    manufacturer: 'Audi',
    year: 2020
  };

  for (let key in car) {
    console.log (car[key]);
  }

  /*Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas constantes, a e b, definidas no começo com os valores que serão operados. Faça programas para:

  Adição (a + b)
  Subtração (a - b)
  Multiplicação (a * b)
  Divisão (a / b)
  Módulo (a % b)*/

 

  function somaTotal (a, b) {
    let resultado = (a - b);
    return resultado;
    
  } 
  console.log (somaTotal(10, 40));
  /*Faça um programa que retorne o maior de dois números. Defina, no começo do programa, duas constantes com os valores que serão comparados.*/

  

  function comparaValores (valor1, valor2) {
    
    if (valor1 > valor2) {
      return 'O ' + valor1 + ' não é maior que ' + valor2;
    } else {
      return valor2 + ' é maior dos valores comparados';
    }

  }

  console.log (comparaValores(20, 70));


  /*Faça um programa que, dado um valor recebido como parâmetro, retorne “positive” se esse valor for positivo, “negative” se for negativo, e caso não seja nem positivo e nem negativo retorne “zero”.*/

  function jogoDaVerdade (valor1) {

    if (valor1 >0) {
      return 'Valor positvo';
    } else if (valor1 <0) {
      return 'Valor negativo';
    } else {
      return 'Zero';
    }

    }
  console.log (jogoDaVerdade(0));




  function imprimeIdade() {
    for (let idade = 30; idade <= 40; idade += 1) {
      console.log('Idade dentro do for:', idade)
    }
    c
  }
  imprimeIdade()


    // Executando esse código iremos receber um erro `TypeError: Assignment to constant variable.`
 


    const pessoa = {
      nome: 'Henri',
      idade: 20
    }
    pessoa.nome = 'Luna'
    pessoa.idade = 19
    console.log('Nome:', pessoa.nome)
    console.log('Idade:', pessoa.idade)