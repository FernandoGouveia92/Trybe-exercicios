// transforme o obj em array
const arrays = [
    ['1', '2', '3'],
    [true],
    [4, 5, 6],
  ];
  
  function flatten() {
    const newArray = arrays.reduce((acc, valor) => acc.concat(valor)
    // const newArray = arrays.reduce(callback, [])
    );
    return newArray;
}
console.log(flatten())