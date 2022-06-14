import React from "react";

const conteudos = [
  {
    conteudo: 'High Order Functions',
    bloco: 8,
    status: 'Aprendido'
  },
  {
    conteudo: 'Composicao de Componentes',
    bloco: 11,
    status: 'Aprendendo',
  },
  {
    conteudo: 'Composicao de Estados',
    bloco: 12,
    status: 'Aprenderei'
  },
  {
    conteudo: 'Redux',
    bloco: 16,
    status: 'Aprenderei'
  },
];

class Content extends React.Component {
  render() {
    return (
      conteudos.map((obj) => {
        return (<ol key='listaBlocos'>
          <li className='footer'>O conteúdo é:{obj.conteudo}</li>
          <li className='footer'>Status:{obj.status}</li>
          <li className='footer'>Bloco:{obj.bloco}</li>
        </ol>)
      })
    )
  }
}

export default Content;
