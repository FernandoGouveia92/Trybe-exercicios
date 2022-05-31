
// const user = {
//     name: 'Maria',
//     age: 21,
//     nationality: 'Brazilian',
//   };
  
//   const jobInfos = {
//     profession: 'Software engineer',
//     squad: 'Rocket Landing Logic',
//     squadInitials: 'RLL',
//   };

//   const pessoaUsuaria = {...user, ...jobInfos};

//   const { name, age, nationality, profession, squad, squadInitials} = pessoaUsuaria;

//   console.log(`Hi, my name is ${name}, I'm ${age} years old and I'm ${nationality}. I work as a ${profession} and my squad is ${squadInitials}-${squad}`)

// //  FIXANDO ARRAY DESTRUCTURING:

// const saudacoes = ['Olá', (saudacao) => console.log(saudacao)];

// // saudacoes[1](saudacoes[0]); // Olá

// // Produza o mesmo resultado acima, porém utilizando array destructuring

// const [hello, funcConst] = saudacoes

// console.log(hello)
// console.log(funcConst)
// console.log(funcConst(hello))

// //=====================================
// let comida = 'gato';
// let animal = 'água';
// let bebida = 'arroz';

// console.log(comida, animal, bebida); // arroz gato água
// // Utilizando array destructuring, faça com que os valores apareçam nas variáveis correspondentes ao seu verdadeiro tipo

// const something = [comida, animal, bebida];

// [animal, bebida, comida] = something

// console.log(comida, animal, bebida)

// //===================================================

// let numerosPares = [1, 3, 5, 6, 8, 10, 12];
// console.log([...numerosPares.filter(element) => element % 2 === 0])

// [ , , , ...rest] = numerosPares
// // numerosPares = [rest]
// // ATENÇÃO: COLOCANDO ESPAÇOS VAZIOS ANTES DE COLOCAR O MÉTODO '...rest' EU VOU IGNORAR OS ELEMENTOS NAS POSIÇÕES QUE IGNOREI E CHAMAREI TODO O RESTANTE DO ARRAY DE --REST--.
// console.log(rest)
// console.log(numerosPares); // [6, 8, 10, 12];

// Utilize array destructuring para produzir o resultado esperado pelo console.log abaixo

//===================================================

// const getNationality = ({ firstName, nationality = 'Brazillian' }) => `${firstName} is ${nationality}`;

// const person = {
//   firstName: 'João',
//   lastName: 'Jr II',
// };

// const otherPerson = {
//   firstName: 'Ivan',
//   lastName: 'Ivanovich',
//   nationality: 'Russian',
// };

// // const {nationality = 'Brazillian'} = person

// console.log(getNationality(otherPerson)); // Ivan is Russian
// console.log(getNationality(person));

