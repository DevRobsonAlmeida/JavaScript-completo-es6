var nome = 'André';
let idade = 28;
const possuiFaculdade = true;

console.log(nome, idade, possuiFaculdade);



//Evitam repetições
//DRY (Don't repeat yourself)
var preco = 20;
var totalComprado = 5;
var precoTotal = preco * totalComprado;

console.log();
console.log('Evitar repetições');
console.log(precoTotal);


//Vírgula
//Utilizei a vígula para criar mais de uma variável. sem repetir a palavra chave var.
var sobrenome = 'Rafael',
  cidade = "Rio";
console.log(sobrenome, cidade);


//Sem valor
//Poder declarar ela e não atribuir valor inicialmente
var precoAplicativo;
// retorna underfined


/**
 *  _Nome
 *
 * *Os nomes podem iniciar com $, _, ou letras.
 *  podem conter números, mas não iniciar com eles.
 *
 * *Case sensitive
 *  nome é difentente de Nome
 *
 * *Não utilizar palavras reservadas
 *  https://www.w3school.com.js/js_reserved.asp
 *
 * *Camel case
 *  É comum nomearmos assim: abrirModal
 *
 *  > Inválidos
 *  var function;
 *  var 1possuiFaculdade;
 *
 *  > Válido
 *  var $selecionar
 *  var _nome;
 *  var possuiFaculdadeNoExterior;
 *
 */


// Declarar
// Error ao tentar utilizar uma variável que não foi declarada
// console.log(Defenio);
// retorna nome is not defined


// Hoisting
// São movidas para cima do código, porém o valor atribuido não é movido.
console.log(nickname); //Retorna underfind
var nickname = 'Robs';

var profissao = 'Designer';
console.log(profissao); // Retorna Designer



// Mudar o valor atribuído
// É possível mudar os valores atribuídos a variáveis declaras com 'var' e 'let'. 
// Porém não é possivel modificar valores das declaradas com 'const'
/*
  var idade = 28;
  var idade = 29; // Permite atribuir um nome já declarado anteriormente
  console.log(idade);
  let preco = 50;
  let preco = 25; // Não Permite atribuir um nome já declarado anteriormente
  console.log(preco);
  const possuiFaculdade = true;
  const possuiFaculdade = false; // Retorna erro, pois quando já declarado ele não deixa repetir
  console.log(possuiFaculdade);
*/





//   Exercicio
var meuNome = "Robson";
var minhaIdade = 22;
var comidaFavorita;
comidaFavorita = "Pizza";
var horas,
  dia,
  tempo,
  trabalho,
  ondeMora;

console.log(
  'nome:', meuNome, '\n' +
'idade:', minhaIdade, '\n' +
'comida favorita:', comidaFavorita);

