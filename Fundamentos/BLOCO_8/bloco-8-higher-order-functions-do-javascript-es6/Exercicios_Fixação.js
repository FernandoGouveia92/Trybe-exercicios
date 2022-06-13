// const novato = (name) => {
//     const obj = {
//         name,
//         email: `${name.replace(' ','_').toLowerCase()}@trybe.com`,
//     }
//     return obj;
// };

// const newEmployees = (callback) => {
//     const employees = {
//       id1: callback('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas.
//       id2: callback('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas.
//       id3: callback('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas.
//     }
//     return employees;
//   };

// console.log(newEmployees(novato));


// (MATH RANDOM(max -min)+min)
// const checador = (numeroApostado, numeroSorteado) => {
//   return numeroApostado === numeroSorteado;
// }

// const oMeuHOF = (callback, sortudo) => {
//     const numeroQualquer = Math.floor(Math.random()*(5-1)+1);
//     if(callback(numeroQualquer, sortudo)) {
//         return "Parabéns você ganhou";
//     }
//     return "Tente novamente";
// }

// console.log(oMeuHOF(checador, 5));

const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const contadorDePontos = (arrayRespostas, arrayEstudante) => {
    let contadorDeXablau = 0;
    for (let i = 0; i < arrayEstudante.length; i++) {
      if(arrayEstudante[i] === 'N.A'){
        contador += 0;
      } else if (arrayEstudante[i] === arrayRespostas[i]) {
          contador += 1;
      } else {
          contador -= 0.5;
      }
    }
}

const aMinhaHOF = (respostasCorretas, respostasDoEstudante, contador) => {
    return contador(respostasCorretas, respostasDoEstudante)
}