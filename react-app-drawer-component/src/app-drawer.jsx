import React from 'react';

export class AppDrawer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
    this.openDrawer = this.openDrawer.bind(this);
    this.closeDrawer = this.closeDrawer.bind(this);
  }

  openDrawer() {
    this.setState({ open: false });
  }

  closeDrawer() {
    this.setState({ open: true });
  }

  render() {
    return (
      <div>
        <div className='modal'>
          <div></div>
        </div>
        <div className='main'>
          <i className='fas fa-bars'></i>
          <img className='background-image' src='https://i.pinimg.com/474x/e0/21/8e/e0218ecf340fd7c1aa2ec41d08973549.jpg'></img>
        </div>
      </div>
    );
  }
}
