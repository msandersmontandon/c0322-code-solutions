import React from 'react';
import ReactDOM from 'react-dom';

class CustomButton extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = { isClicked: false };
  }

  handleClick() {
    this.setState({ isClicked: true });
  }

  render() {
    return (
      <button onClick={this.handleClick}>{!this.state.isClicked ? 'Click Me!' : 'Thanks!'}</button>
    );
  }
}

const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);

root.render(<CustomButton />);
