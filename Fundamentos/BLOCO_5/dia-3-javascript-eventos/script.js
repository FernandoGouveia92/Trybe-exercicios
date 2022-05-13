function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
    // definiu a array weekDays que será usada
    // criou uma constante para fazer uso com a classe .week-days
    for (let index = 0; index < weekDays.length; index += 1) {
      // criou uma constante para armazenar
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days; // o DAYS 
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  // exer 1
  // uma função não lê o que está fora dela, por isso que se faz tudo em FUNÇÃO.
  function createDaysOfTheMonth() {
    const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
    const daysList = document.querySelector('#days');
    //selecionei o elemento que quero manipular.
    
    for (let i = 0; i < dezDaysList.length; i += 1) {
      const liDays = document.createElement('li');
      liDays.innerText = dezDaysList[i];
      liDays.classList.add('day');

      if (dezDaysList[i] === 24 || dezDaysList[i] === 25 || dezDaysList[i] === 31 ){
        liDays.classList.add('holiday');
      }
      if (dezDaysList[i] === 4 || dezDaysList[i] === 11 || dezDaysList[i] === 18 || dezDaysList[i] === 25){
        liDays.classList.add('friday');
      }

      daysList.appendChild(liDays);

      
    }
  }
  // exer 2 - CRIAÇÃO DE UM BOTÃO DE FORMA GENÉRICA QUE PODE SER REPETIDA
  function createButton(nameButton, idName, elementFather) {
    const btn = document.createElement('button');
    btn.id = idName;
    btn.innerText = nameButton;
    const parentElement = document.querySelector(elementFather);
    parentElement.appendChild(btn);
  }

  createButton('Feriados', 'btn-holiday', '.buttons-container');


  // exer 3
  const btnHoliday = document.getElementById('btn-holiday');

  btnHoliday.addEventListener('click', function () {
    const holidays = document.querySelectorAll('.holiday');

    for (let index = 0; index < holidays.length; index += 1){
      if (holidays[index].style.backgroundColor === 'green'){
        holidays[index].style.backgroundColor = "rgb(238,238,238)";
        holidays[index].style.color = "rgb(119,119,119)";
      }
      else {
        holidays[index].style.backgroundColor = 'green';
        holidays[index].style.color = 'white';
      }
    }
  });

  // exer 4
  createButton('Sexta-feira', 'btn-friday', '.buttons-container');
  // ja que criei essa função de criar um botão, eu não preciso inserir diretamente valores específicos. 
  //Apenas preciso inserir os valores dentro da pŕopria função -> createButton

  //exer 5

  const btnFridays = document.getElementById('btn-friday');
  btnFridays.addEventListener('click', function (){

  const fridays = document.querySelectorAll('.friday');

  for (let index = 0; index < fridays.length; index += 1){
    if (fridays[index].innerText === 'Sextou!!'){
      fridays[index].innerText = Number(fridays[index].previousSibling.innerText) + 1;
    } else {
      fridays[index].innerText = 'Sextou!!';
    }
  }
})

//exer 6

const liDays = document.querySelectorAll('.day');

for (let i = 0; i < liDays.length; i++) {
  liDays[i].addEventListener('mouseover', zoomIn);
}

for (let i = 0; i < liDays.length; i++) {
  liDays[i].addEventListener('mouseout', zoomOut);
}

function zoomIn(event) {
  event.target.style.fontSize = '35px';
}

function zoomOut(event) {
  event.target.style.fontSize = '20px';
}


  createDaysOfTheWeek();
  
  createDaysOfTheMonth();

  // Escreva seu código abaixo.

