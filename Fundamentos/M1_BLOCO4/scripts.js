// let myName = "Fernando";
// let birthCity = "Recife";
// let birthYear = 2030;

// console.log(birthCity);
// console.log(birthYear);
// console.log(myName);

// let movie = "Avengers"; //string literal
// let score = 10; //number literal - numeros quebrados devem ser separados por PONTO " . "
// let isValid = true; //tipo boolean - pode ser TRUE ou FALSE
// let name; //underfined - valor indefinido. Valor pode ser atribuido no futuro.
// let color = null; //redefinição

// let patientId = 50;
// let isEnrolled = true;
// const patientInfo = {
//   firstName: 'Ana',
//   lastName: 'Santos',
// };
// const patientEmail = 'ana@email.com';

// console.log(typeof patientAge);

// const base = 5 ;
// let altura = 8 ;
// let area = base * altura;
// let perimeter = base * 2 + altura * 2;

// console.log(area);
// console.log(perimeter);

// const nota = 85 ;

// if (nota >= 80) {
//     console.log("Parabéns! Você foi aprovado!");
// }

// else if (nota < 80 && nota >= 60) {
//     conseole.log("Você está na nossa lista de espera");
// }

// else {
//     console.log("Você foi reprovado...");
// }

// FOR / IN - ESTRUTURAS DE OBJETOS

let pizzas = {
    sabor:"Palmito",
    preco: 39.90,
    bordaDeCatupiry: true
};

for (let key in pizzas) {
    console.log(key, pizzas[key]);  // posso utilizar, dentro do console (pizzas.nome-do-elemento) - ex.: console.log(pizzas.preco) 
                       // Outra forma seria console.log(pizzas['preco']) ou console.log(pizzas[key])
}

let pizzasDoces = ['chocolate', 'banana', 'morango'];

for (let key in pizzasDoces){
    //console.log(pizzasDoces[key]);
    //console.log(key);
    // console.log(key, pizzasDoces[key], pizzasDoces);
}

// EXEMPLO FOR IN/OF //

let names = {
    person1: 'João',
    person2: 'Maria',
    person3: 'Jorge',
};

for (let falar in names){
    console.log('OLá,', names[falar]);
}

//

let car = {
    model: 'A3 Sedan',
    manufacturers: 'Audi',
    year: 2020
}

for (let idCar in car){
    console.log(idCar, car[idCar] );
}