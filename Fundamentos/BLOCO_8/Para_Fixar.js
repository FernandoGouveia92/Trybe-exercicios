// Primeiro eu crio uma FUNÇÃO que tem valores dentro. Essa função eu usarei para que seja chamada por OUTRA FUNÇÃO depois.
const string = () => 'Acordando!!';
const coffe = () => 'Bora tomar café!!';
const capotar = () => 'Partiu dormir!!';

// A FUNÇÃO doingThings() e usada pra que seja utilizada como 'o chamador de outras FUNÇÕES'.
const doingThings = (func) => func();

// No console.log eu coloco a FUNÇÃO CHAMADORA e nos parenteses, coloco o PARÂMETRO que é UMA FUNÇÃO PREVIAMENTE FEITA, que possui os valores que serão exibidos.
console.log(doingThings(capotar));