// EXERCICIOS FOR IN - OF - FUNÇÕES


// OBJETO PRINCIPAL
// let info = {
//     personagem: 'Margarida',
//     origem: 'Pato Donald',
//     nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
// }
//EXERCICIO 1

// for (let saudacao in info){
//     console.log('Bem-vinda, ' + info['personagem']); 
// }

//EXERCICIO 2

//============================= info['recorrentes'] = 'Sim'; // LEMBRA DESSA PORRA!!!!! NÃO USA PUSH!!
// console.log(info);

//EXERCICIO 3

// for (let propriedades in info){
//     console.log(propriedades);
// }

//EXERCICIO 4

// for (let valores in info){
//     console.log(info[valores]);
// }

//EXERCICIO 5

// let info2 = {
//     personagem: 'Tio Patinhas',
//     origem:'Christmas on Bear Mountain, Dells Four Color Comics #178',
//     nota: 'O último MacPatinhas',
//     recorrentes:'Sim',
// }

//
// let infoGeral = (info + info2);
// for (let i in info) {
//     if (i === 'recorrente' && info.recorrente === info2.recorrente) {
//       console.log('Ambos Recorrentes')
//     } else {
//       console.log(info[i] + ' e ' + info2[i]);
//     }
//   }
  //TENTATIVAS FRUSTRADAS DO EXER 5 //
    // console.log(info['personagem'] + ' e ' + info2['personagem'] + info['origem'] + ' e ' + info2['nota']);
    // console.log((info, info2)['personagem'] + (info, info2)['origem'] + (info, info2)['nota'] + (info, info2)['recorrentes']);,
    // console.log(infoGeral['personagem'] + infoGeral['origem'] + infoGeral['nota'] + infoGeral['recorrentes']);

//EXERCICIO 6

let leitor = {
  nome: 'Julia',
  sobrenome: 'Pessoa',
  idade: 21,
  livrosFavoritos: [
    {
      titulo: 'O Pior Dia de Todos',
      autor: 'Daniela Kopsch',
      editora: 'Tordesilhas',
    },
  ],
};

console.log('O livro favorito de '+leitor['nome']+' '+leitor['sobrenome']+" se chama '" +leitor.livrosFavoritos[0].titulo+"'");
//o [0] nesse caso serve para acessar o indice da ARRAY, e depois do 'ponto', declara-se qual propriedade quero acessar, por isso o 'titulo' 
//diferente de outros exemplos onde, para acessar elementos dentro de uma ARRAY, se usa [1], [4], ou qualquer outro numero referebte à posição do elemento dentro da ARRAY.

//EXERCICIO 7

// leitor.livrosFavoritos[1].'titulo' = 'Harry Potter e o Prisioneiro de Azkaban'
// leitor.livrosFavoritos[1].'autor' = 'JK Rowling'
// leitor.livrosFavoritos[1].'editora' = 'Rocco'

//PRIMEIRA SOLUÇÃO: SELECIONA A POSIÇÃO ESPECÍFICA NO ARRAY ONDE SERÃO INSERIDOS AS PROPRIEDADES E VALORES RESPECTIVOS.
leitor.livrosFavoritos[1] = [titulo = 'Harry Potter e o Prisioneiro de Azkaban', autor = 'JK Rowling', editora = 'Rocco'];

//SEGUNDA SOLUÇÃO: UTILIZANDO O COMANDO 'PUSH' EU ENVIO UM NOVO ARRAY **DIRETAMENTE** PARA O 'FIM DA LISTA', SEM PRECISAR 'CONTAS QUANTAS ARRAYS EXISTEM. <--- ISSO VAI SER BEM COMUM!!!!
// leitor.livrosFavoritos.push(
//     {
//         titulo: 'Harry Potter e o Prisioneiro de Azkaban',
//         autor: 'JK Rowling',
//         editora: 'Rocco',
//     }

// )
// console.log(leitor);

//EXERCICIO 8

console.log(leitor.nome+ ' tem '+leitor.livrosFavoritos.length+' livros favoritos.');

// PARTE 2

// 