// const { blob } = require("stream/consumers");

// apiScript.js
const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = () => {
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };
  tellMeAJoke()
  .catch(error => {
    console.log('error');
    console.error(error);
});
  async function tellMeAJoke () {
      const response = await fetch(API_URL, myObject);
      const badJoke = await response.json();
      document.getElementById('jokeContainer').innerText = badJoke.joke;
  }


//   fetch(API_URL, myObject)
//     .then(response => response.json())
//     .then(data => {
//         console.log(data);
//         document.getElementById('jokeContainer').innerText = data.joke;
//     })
//     .catch(error => {
//         console.log('error');
//         console.error(error);
//     });
};
// fetchJoke();
window.onload = () => fetchJoke();