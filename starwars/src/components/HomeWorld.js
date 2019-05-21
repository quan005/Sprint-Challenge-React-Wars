import React from 'react';

class HomeWorld extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        homeWorldUrl: props.homeWorld,
        homeWorld: [],
        isLoading: false,
      }
  }
  
  componentDidMount() {
    this.setState({isLoading: true});

    this.getHomeWorld(this.state.homeWorldUrl);
  }

  getHomeWorld = url => {
    fetch(url)
      .then(res => res.json())
      .then(data => this.setState({homeWorld: [...this.state.homeWorld, data], isLoading: false}))
      .catch(err => {throw new Error(err)});
  }

  render() {
    return (
      <p>
           <strong>Home Planet:</strong> {this.state.isLoading ? "Loading..." : this.state.homeWorld.map(planet => planet.name)}
      </p>
    );
  }
}
  
export default HomeWorld;
  