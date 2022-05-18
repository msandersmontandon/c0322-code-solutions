import React from 'react';

export class HotButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { clickCount: 0 };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ clickCount: this.state.clickCount + 1 });
  }

  render() {
    return (
      <button onClick={this.handleClick} className={
        this.state.clickCount < 3
          ? 'coldest'
          : this.state.clickCount < 6
            ? 'colder'
            : this.state.clickCount < 9
              ? 'cold'
              : this.state.clickCount < 12
                ? 'warm'
                : this.state.clickCount < 15
                  ? 'warmer'
                  : this.state.clickCount < 18
                    ? 'hot'
                    : 'hottest'
      }>Hot Button</button>
    );
  }
}
