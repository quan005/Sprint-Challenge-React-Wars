import React, { Component } from 'react';
import './App.css';
import Character from './components/Character';

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: [],
    };
  }

  componentDidMount() {
    this.getCharacters('https://swapi.co/api/people/');
  }

  getCharacters = URL => {
    // feel free to research what this code is doing.
    // At a high level we are calling an API to fetch some starwars data from the open web.
    // We then take that data and resolve it our state.
    fetch(URL)
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({ starwarsChars: data.results });
        console.log(this.state.starwarsChars);
      })
      .catch(err => {
        throw new Error(err);
      });
  };
  

  render() {
    const characterInfo = this.state.starwarsChars.map(characterData => (
      <Character 
      character={characterData} 
      homeworld={characterData.homeworld}
      key={characterData.name} 
      />
    ));

    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>

        <div className="class-list">
          {characterInfo}
        </div>
      </div>
    );
  }
}

export default App;
