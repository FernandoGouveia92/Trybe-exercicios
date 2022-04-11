// EXERCICIOS FOR IN - OF - FUNÇÕES


// OBJETO PRINCIPAL
let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
}
//EXERCICIO 1

// for (let saudacao in info){
//     console.log('Bem-vinda, ' + info['personagem']); 
// }

//EXERCICIO 2

info['recorrentes'] = 'sim'; //LEMBRA DESSA PORRA!!!!! NÃO USA PUSH!!
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

let info2 = {
    personagem: 'Tio Patinhas',
    origem:'Christmas on Bear Mountain, Dells Four Color Comics #178',
    nota: 'O último MacPatinhas',
    recorrentes:'Sim',
}

//
// let infoGeral = (info + info2);
for (let tudoJunto in infoGeral){
    console.log(
}
    // console.log(info['personagem'] + ' e ' + info2['personagem'] + info['origem'] + ' e ' + info2['nota']);
    // console.log((info, info2)['personagem'] + (info, info2)['origem'] + (info, info2)['nota'] + (info, info2)['recorrentes']);,
    // console.log(infoGeral['personagem'] + infoGeral['origem'] + infoGeral['nota'] + infoGeral['recorrentes']);
