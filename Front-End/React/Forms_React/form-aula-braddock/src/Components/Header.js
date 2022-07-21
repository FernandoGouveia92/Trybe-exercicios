import React { Component } from "react";
import Header from '../syles/Header';

class Header extends Component {

  render() {
    return (
      <header>
        <div className="header--logo">
          <img src={ trybelogo } alt="Trybe logo" className="header--img" />
        </div>
      </header>
    );
  };
}

export default Header
