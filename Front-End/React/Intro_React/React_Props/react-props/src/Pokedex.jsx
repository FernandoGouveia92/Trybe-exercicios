import React from "react";
import Pokemon from "./Pokemons";

class Pokedex extends React.Component {

  constructor(props) {
    super(props)
    const { pokemons } = this.props
    this.proxPokemon = this.proxPokemon.bind(this)
    this.filtroPokemon = this.proxPokemon.bind(this)
    this.state = {
      showPokemon: pokemons,
      posicaoPokemon: 0,
      tipoDePokemon: 'All',
    }
  }

  proxPokemon() {
    const { posicaoPokemon, showPokemon } = this.state
    this.setState((pokemonAtual, _props) => ({ // -pokemonAtual- é o estado ANTERIOR
      posicaoPokemon: posicaoPokemon < showPokemon.length - 1 ? pokemonAtual.posicaoPokemon + 1 : 0
    }));
  }

  filtroPokemon(event) {
    const { pokemons } = this.props
    if (event.target.innerText === 'All') {
      this.setState({
        showPokemon: pokemons
      })
    } else {
      this.setState({
        tipoDePokemon: event.target.innerText,
        showPokemon: pokemons.filter((e) => e.type === event.target.innerText)
      });
    }
    console.log(event.target.innerText)
  }

  render() {
    const { pokemons } = this.props

    return (
      <div>
        {this.state.showPokemon
          // .filter((ee) =><Pokemon pokemon={ee[this.showPokemon]} key={ee.id} className="currentPokemon" />)
          .map((e) => <Pokemon pokemons={e} key={e.id} />)[this.state.posicaoPokemon]}
        <div className="leBottons">
          <button onClick={this.proxPokemon}>Next Pokemon</button>

          <button onClick={this.filtroPokemon}>All</button>

          <button onClick={this.filtroPokemon}>Fire</button>
          <button onClick={this.filtroPokemon}>Bug</button>
          <button onClick={this.filtroPokemon}>Psychic</button>
          <button onClick={this.filtroPokemon}>Electric</button>
          <button onClick={this.filtroPokemon}>Dragon</button>
          <button onClick={this.filtroPokemon}>Normal</button>
        </div>
      </div>
    )
  }
}

export default Pokedex;
