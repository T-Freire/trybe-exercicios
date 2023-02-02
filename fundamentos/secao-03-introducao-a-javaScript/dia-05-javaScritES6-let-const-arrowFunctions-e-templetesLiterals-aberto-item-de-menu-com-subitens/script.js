/*🚀 Altere o tipo das variáveis (var) para let ou const para que respeitem o escopo em que foram declaradas.

🚀 Modifique a variável para que respeite o escopo onde está sendo declarada. Lembre-se: para que a variável respeite o escopo, ela não deve ser acessível fora do escopo em que esteja sendo declarada.

Copie o código abaixo e rode-o para verificar sua saída:*/

function imprimeIdade() {
    for (let idade = 30; idade <= 40; idade += 1) {
      console.log('Idade dentro do for:', idade)
    }
  
  }
  imprimeIdade()

  /*Altere o valor das propriedades do objeto, para que respeite as características da variável do tipo const;
  Copie o código abaixo e rode-o para verificar sua saída:*/

    // Executando esse código iremos receber um erro `TypeError: Assignment to constant variable.`
    const pessoa = {
        nome: 'Henri',
        idade: 20
      }
      pessoa.nome = 'Thiago';
      pessoa.idade = 34;

      console.log('Nome:', pessoa.nome);
      console.log('Idade:', pessoa.idade);
      console.log(pessoa);
  
     /* Modifique a variável para que não ocorra Erro;
Copie o código abaixo e rode-o para verificar sua saída:

Copiar*/
  let favoriteFood = 'Lasanha'; // a varriável const é IMUTÁVEL!
  favoriteFood = 'Hamburguer';
  console.log(favoriteFood);



  /*Modifique as concatenações para template literals.

Copie o código abaixo:

Copiar*/
  let name = 'Adriana';
  let lastName = 'Soares';
  let fullname = 'Adriana Soares';

  console.log('Olá' + ',' + name + ' ' + lastName + '!');
  console.log(`Olá ${fullname}!`);
  
  
  function soma(a,b) {
    let resultado = a + b;
    return resultado;
  }
  let a = 3;
  let b = 5;
  
  console.log('O resultado da soma de ' + a + ' + ' + b + ' é: ' + soma(a,b));

  /*Modifique a estrutura das funções a seguir para que elas sejam arrow functions;

  🚀 Transforme a função numeroAleatorio em uma arrow function;
  Copie o código abaixo:
  
  Copiar*/
    function numeroAleatorio() {
      return Math.random()
    }
    console.log(numeroAleatorio());

    const numeroAleatorio = Math.random() => numeroAleatorio();
  

  