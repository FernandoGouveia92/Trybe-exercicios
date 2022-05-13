let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// primeiro exer //
for (let index = 0; index < numbers.length; index++){
    console.log(numbers[index]);
}

// segundo exer //
let soma = 0;
for (let index = 0; index < numbers.length; index++){
    soma += numbers[index]; // forma abreviada de soma = soma + numbers[index] <- onde cada rotação do FOR, puxando os elementos da array NUMERS será somado, gerando o total, armazenado na variável SOMA.
}

console.log(soma);

// terceiro exer //

console.log(soma / numbers.length);

// quarto exer //
let mediaAritmetica = soma / numbers.length

if (mediaAritmetica > 20) {
    console.log("Valor maior que 20");
}
else if (mediaAritmetica < 20){
    console.log("Valor menor que 20");
}
else {
    console.log("erro")
}

// quinto exer //
let maior = 0;

for (number of numbers) {
    if (number > maior)
    maior = number;
}

console.log(maior)

// sexto exer //


for (number of numbers){
    if(number % 2 === 0)
        console.log("Número par")
    
    else if(number % 2 !== 0)
        console.log("Número é impar")
    
    else 
        console.log("erro")
}

// sétimo exer //

let menor = 2;

for (number of numbers) {
    if (number < menor)
    menor = number;
}

console.log(menor)

// oitavo exer //

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25];

for (todosNumeros of numeros) {
    console.log(todosNumeros);
}

// nono exer //