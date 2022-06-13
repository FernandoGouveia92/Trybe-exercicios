// const h = document.getElementsByClassName('titulo');
// const intro = document.getElementsByClassName('introText');
// const paragrafo = document.getElementsByClassName('lerolero');

localStorage.getItem('chave')
localStorage.setItem('chave', 'valor')
localStorage.removeItem('chave')
localStorage.clear() - //está associado ao proj carrinho de compras - para limpar o carrinho

JSON.stringify() // transoforma em string
JSON.parse() // transforma em obj
// um reverte o efeito do outro

const addToLocal = (dados) => {
    if(localStorage.getItem('local') === null) {
        localStorage.setItem('local', "[]")
    }
    const arrayLocalStorage = JSON.parse(localStorage.getItem('local'))
    arrayLocalStorage.push(dados)
    const arrayStringfy = JSON.stringify(arrayLocalStorage)

    localStorage.setItem('local', arrayStringfy)

    // const treatDados = json.stringify(dados)
    // localStorage.setItem('local', )
}

const getLocal = (chave) => {
   return JSON.parse(localStorage.getItem(chave))
}
localStorage.clear()
console.log(getLocal('local'))

window.onload = () => { createKart()}



// addToLocal({chave: 'valor'})
// addToLocal({teste: 'testin'})
// addToLocal({xablau: 'alguma coisa'})

// addToLocal({chave: 'valor'})
