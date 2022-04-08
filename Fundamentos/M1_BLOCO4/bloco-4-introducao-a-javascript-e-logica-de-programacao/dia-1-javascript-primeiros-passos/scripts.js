const a = 4;
const b = 5;
const c = 10;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);

//--------------------//

if (a > b) {
    console.log("a é maior");
}
else {
    console.log("b é maior");
}

//--------------------------//

if (a > b && a > c) {
    console.log("a é maior");
}
else if (b > a && b > c) {
    console.log("b é maior");
}
else {
    console.log("c é maior");
}

//-------------------------//

const x = 2;

if (x > 0) {
    console.log("Positive");
}
else if (x = 0) {
    console.log("zero");
}
else {
    console.log("Negative");
}

//-----------------------//

const aa = 60;
const ab = 70;
const ac = 50;

if (aa + ab + ac == 180) {
    console.log("True");
}
else if (aa + ab + ac <= 180 && aa + ab + ac >= 180) {
    console.log("False");
}
else {
    console.log("ERROR");
}

//--------------------------//

const peca = "cavalo";

if (peca == "cavalo") {
    console.log("esta peca anda em L, três casas pra frente e uma para o lado")
}
else {
    console.log("defina a peca")
}

//-------------------//

let notaProva = 90;

switch (notaProva) {
    case notaProva >= 90:
        console.log("A");
        break;
    case notaProva >= 80:
        console.log("B");
        break
    
    case notaProva >= 70:
        console.log("C");
        break
    
    case notaProva >= 60:
        console.log("D");
        break
      
    case notaProva >= 50:
        console.log("E");
        break
    
    case notaProva < 50:
        console.log("F");
        break
          
              
    default:
        console.log("Ele é buro, ele!");
}

//------------------------//

let groceryList = ['Arroz', 'Feijão', 'Alface', 'Melancia'];

for (let index = 0; index < groceryList.length; index += 1) {
    console.log(groceryList[index]);
}

let names = ['João', 'Maria', 'Antônio', 'Margarida'];

for (let word of names) {
    console.log(word);
}

//----------------------//

