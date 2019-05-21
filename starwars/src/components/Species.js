import React from 'react';

class Species extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        speciesUrl: props.species,
        species: [],
        isLoading: false,
      }
  }

  componentDidMount() {
    this.setState({isLoading: true});

    this.getSpecies(this.state.speciesUrl);
  }

  getSpecies = url => {
    fetch(url)
      .then(res => res.json())
      .then(data => this.setState({species: [...this.state.species, data], isLoading: false}))
      .catch(err => {throw new Error(err)});
  }

  render() {
    return (
      <p>
           <strong>Species:</strong> {this.state.isLoading ? "Loading..." : this.state.species.map(genus => genus.name)}
      </p>
    );
  }
}
  
  export default Species;