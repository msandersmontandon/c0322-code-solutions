import React from 'react';

export class Stopwatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = { clockRunning: false, seconds: 0 };
    this.startClock = this.startClock.bind(this);
    this.stopClock = this.stopClock.bind(this);
    this.resetClock = this.resetClock.bind(this);
  }

  startClock() {
    this.setState({ clockRunning: true });
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  stopClock() {
    this.setState({ clockRunning: false });
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({ seconds: this.state.seconds + 1 });
  }

  resetClock() {
    if (!this.state.clockRunning) this.setState({ seconds: 0 });
  }

  render() {
    return (
      <div className='row'>
        <div className='column'>
          <div className='circle' onClick={this.resetClock}>
            { this.state.seconds }
          </div>
        </div>
        <div className='column'>
          <i className={ !this.state.clockRunning ? 'fas fa-play' : 'fas fa-pause'}
          onClick={ !this.state.clockRunning ? this.startClock : this.stopClock}></i>
        </div>
      </div>
    );
  }
}
