// // transforme o obj em array
// const arrays = [
//     ['1', '2', '3'],
//     [true],
//     [4, 5, 6],
//   ];
  
//   function flatten() {
//     const newArray = arrays.reduce((acc, valor) => acc.concat(valor)
//     // const newArray = arrays.reduce(callback, [])
//     );
//     return newArray;
// }
// // console.log(flatten())

// const persons = [
//   { firstName: 'Maria', lastName: 'Ferreira' },
//   { firstName: 'João', lastName: 'Silva' },
//   { firstName: 'Antonio', lastName: 'Cabral' },
// ];

// const fullNames = [];

// for (let index = 0; index < persons.length; index += 1) {
//   fullNames.push(`${persons[index].firstName} ${persons[index].lastName}`);
// }

// console.log(fullNames);

const posts = [
  {id: 1, category: "frontend", title: "All About That Sass"},
  {id: 2, category: "backend", title: "Beam me up, Scotty: Apache Beam tips"},
  {id: 3, category: "frontend", title: "Sanitizing HTML: Going antibactirial on XSS attacks"}
];

const categoryPosts = posts.reduce((acc, post) => {
  let {id, category} = post;
  return {...acc, [category]: [...(acc[category] || []), id]};
}, {});
console.log(categoryPosts)