const books = [
    {
      id: 1,
      name: 'As Crônicas de Gelo e Fogo',
      genre: 'Fantasia',
      author: {
        name: 'George R. R. Martin',
        birthYear: 1948,
      },
      releaseYear: 1991,
    },
    {
      id: 2,
      name: 'O Senhor dos Anéis',
      genre: 'Fantasia',
      author: {
        name: 'J. R. R. Tolkien',
        birthYear: 1892,
      },
      releaseYear: 1954,
    },
    {
      id: 3,
      name: 'Fundação',
      genre: 'Ficção Científica',
      author: {
        name: 'Isaac Asimov',
        birthYear: 1920,
      },
      releaseYear: 1951,
    },
    {
      id: 4,
      name: 'Duna',
      genre: 'Ficção Científica',
      author: {
        name: 'Frank Herbert',
        birthYear: 1920,
      },
      releaseYear: 1965,
    },
    {
      id: 5,
      name: 'A Coisa',
      genre: 'Terror',
      author: {
        name: 'Stephen King',
        birthYear: 1947,
      },
      releaseYear: 1986,
    },
    {
      id: 6,
      name: 'O Chamado de Cthulhu',
      genre: 'Terror',
      author: {
        name: 'H. P. Lovecraft',
        birthYear: 1890,
      },
      releaseYear: 1928,
    },
  ];
  
  // Adicione o código do exercício aqui:

  // Exercício 2

const expectedResult = "George R. R. Martin, J. R. R. Tolkien, Isaac Asimov, Frank Herbert, Stephen King, H. P. Lovecraft.";

function reduceNames() {
  const authorList = books.reduce((acc, valor) => {
      return acc +', '+ valor.author.name
  },'')
  return authorList
}

console.log(reduceNames())

// Exercício 3

const expectedResult = 43;

function averageAge() {
  const mediaAge = books.reduce(() => {}, )
}

// Exercicio 5

// const names = [
//     'Aanemarie', 'Adervandes', 'Akifusa',
//     'Abegildo', 'Adicellia', 'Aladonata',
//     'Abeladerco', 'Adieidy', 'Alarucha',
//   ];
  
//   let string = 'Anamarie'
//   let contador = 0
//   for (const i of names) {
//       for (const j of string) {
//         if(j==='a' || j==='A')
//         contador +=1    
//       } 
//   }
  
// function containsA(contador) {
//       return names.reduce((contador, element) => {
//         for (j of element){
//             if(j==='a' || j==='A')
//             contador +=1
//         }
//       return contador},0)
      
// }    
// console.log(containsA())

// Exercício 6

// const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
// const grades = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];

// function studentAverage() {
//     let media = []
//     return grades.map((grade, i) => {
//         return {name: students[i], averageScore: grade.reduce((acc,el) => (acc + el))/grade.length
//         }
//     }
//     )
//     }
//     for(j of grade){
//         nota +=j
//     }
//     media.push({name: students[i], averageScore: nota/(grade[i].length)})
//     nota = 0
//     return media
//   },0)
// }
// console.log(studentAverage())

// const expected = [
//   { name: 'Pedro Henrique', average: 7.8 },
//   { name: 'Miguel', average: 9.2 },
//   { name: 'Maria Clara', average: 8.8 },
// ];
