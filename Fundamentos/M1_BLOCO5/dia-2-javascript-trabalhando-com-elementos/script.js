//document.getElementById('elementoOndeVoceEsta').parentElement.style.color = 'green';

// console.log(document.getElementById('pai').parentElement.style.color = 'blue');

let container = document.getElementsByTagName('body');
// Eu criei uma vairável com a TAG BODY selecionada, para futuro uso(em uma função por exemplo)
let newH1 = document.createElement('h1');
// inserindo texto na variavel nova (tag nova)
newH1.innerText = 'Exercício 5.2 - JavaScript DOM';
//inserindo no
container.appendChild(newH1);


