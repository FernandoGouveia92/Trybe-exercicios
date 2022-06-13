// dia 3 JAVA - EXER 1 //

let factorial = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
let resultado = 1;

for (i = 0;i < factorial.length;i++) {
    resultado = resultado * factorial[i];
}

console.log(resultado);

// EXER 2 //

let word = 'tryber';
let drow = '';

for (i = 5; i >= [0]; i--){
    drow = drow + word[i];
}

console.log(drow);

// EXER 3 //

let array = ['java', 'javascript', 'python', 'html', 'css'];
let maior = '';
let menor = '';

 // array[0].length

for (i = 0; i < array.length; i++){
    if (array[i].length <= 3){
        menor = array[i];
    }
    else if (array[i].length > 6){
        maior = array[i];
    }
}

console.log(maior);
console.log(menor);
// console.log(array[1].length); // saporra conta a quantidade de letras dentro da string, que por sua vez está na posição 1 - javascript //

// EXER 4 //

let todosOsNumeros = 50;
let ePrimo;
let numerosPrimos = [];

for (i = 2; i <= 50; i++){
    ePrimo = true;
    for (i = 2;i <= numerosPrimos.length; i =+ 1){
        if (ePrimo % 2 == 0){
            ePrimo = false;
            break;
        }
        else {
            numerosPrimos.push[i];
        }
    }
}  
 console.log(numerosPrimos);

// 

