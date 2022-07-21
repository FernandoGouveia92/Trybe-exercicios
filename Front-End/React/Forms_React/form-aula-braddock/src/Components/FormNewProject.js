import React { Component } from "react";
import FormNewProject from '../syles/FormNewProject'

class FormNewProject extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      level: 0,
      thumbnail: '',
      projectFinished: false,
    }
  }
  // this.handleChange = this.handleChange.bind(this); - OU faz o BIND ou usa ARROW FUNCTION 

  handleChange = ({ target }) => {
    const { name, type } = target;
    const value = type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    })
  }
  
  render() {
    const { title, level, thumbnail, projectFinished } = this.state;
    return (
      <form className="new-topic-form" onSubmit={() => { }}>
        <label htmlFor="title">
          Title
          <input
            type="text"
            name="title"
            id="title"
            value={ title }
            onChange={ this.handleChange }
          />
        </label>

        <label htmlFor="level">
          Level:
          <input
            type="number"
            name="level"
            value={ level }
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="thumbnail">
          Image url:
          <input
            type="text"
            name="thumbnail"
            id="thumbnail"
            value={ thumbnail }
            onChange={ this.handleChange }
          />
          <label html="projectFinished">
            Projeto foi finalizado?
            <input
              id="projectFinished"
              type="checkbox"
              name="projectFinished"
              value={ projectFinished }
              onChange={ this.handleChange }
            />
            <button
              type="submit"
              disabled
            >
              Adicionar tópico
            </button>
          </label>
        </label>
      </form>
    )
  }
}