const { CallTracker } = require('assert');
const fetch = require('node-fetch');
const { ReadableStreamBYOBRequest } = require('node:stream/web');

const fetchJoke = () => {
//   const url = 'https://api.chucknorris.io/jokes/random?category=dev';
    const url = 'icanhazdadjoke.com';

  fetch(url)
    .then((response) => response.json())
    .then((data) => console.log(data.value));
}

fetchJoke();


// const haha = {
//     nome: Fernando,
//     sobrenome: Soares,
// }

// fetch = buscar 

// catch = pegar

// Chuck Norris can write multi-threaded applications with a single thread.

// const fetch = require('node-fetch');

// const fetchJoke = async () => {
//   const url = 'https://api.chucknorris.io/jokes/random?category=dev';

//   try {
//     const response = await fetch(url);
//     const data = await response.json();
//     console.log(data.value);
//   } catch(error) {
//     console.log(`Algo deu errado :( \n${error}`);
//   }
// }

// fetchJoke();

// // Chuck Norris can write multi-threaded applications with a single thread.

//===================REVISANDO

//O que é um código que é executado de modo assíncrono? Qual é a diferença disso para um código que é executado de modo síncrono?
// R => Um código assíncrono é um código que 'executa' baseado em receber uma resposta do servidor (por exemplo) e por isso, deve se comportar diferente do restante do código. O código assíncrono serve propósitos peculiares e particulares, no programa/site. Enquanto isso, o restante do código (Síncrono) é executado de forma imediata, logo que é 'chamado'

//Quando você tem que enfileirar várias callbacks, que problema surge?
// R => várias callbacks juntas, deixam o código muito aglomerado e difícil de ler, por outras pessoas que não o desenvolveram.

//Por que as Promises são uma forma de resolver esse problema?
// R => As promises servem para fazer partes do código executarem no seu próprio tempo e, com isso, desafogar o restante das execuções. Promises fazem com que aquele trecho particular de código só possa ser executado quando receber a resposta pela API devida.

//Quando você vai se comunicar com uma API, tal comunicação deve ser síncrona ou assíncrona? Lembre-se de que o serviço ao qual você está se conectando pode demorar muito ou pouco para dar retorno, pode estar fora do ar etc.
// R => A comunicação com uma API deve sempre ser ASSÍNCRONA. Estabelecer uma comunicação síncrona, pode travar o restante do código de ser executado.

//Dada a resposta anterior, o que é fetch e para que ele serve?
// R => Fetch() serve para lidar com requisições HTTPs no JS.