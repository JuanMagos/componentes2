import { Component } from 'react';

class ClassComponent extends Component {
  constructor() {
    super();
    this.state = {
      initialState: 0,
    };
  }
  suma = () => {
    this.setState({
      initialState: this.state.initialState + 1,
    });
  };

  render() {
    return (
      <div>
        <h1>{this.state.initialState}</h1>
        <button onClick={this.suma}>Dame click</button>
      </div>
    );
  }
}

export default ClassComponent;
