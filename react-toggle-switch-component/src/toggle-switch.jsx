import React from 'react';

export class ToggleSwitch extends React.Component {
  constructor(props) {
    super(props);
    this.state = { toggleOn: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ toggleOn: !this.state.toggleOn });
  }

  render() {
    return (
      <div className='row'>
        <div className='column'>
          <div onClick={this.handleClick} className={ this.state.toggleOn ? 'on' : 'off' }>
            <div className='toggle'></div>
          </div>
        </div>
        <p className='column name'>{this.state.toggleOn ? 'ON' : 'OFF' }</p>
      </div>
    );
  }
}
