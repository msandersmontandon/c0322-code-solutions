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
    return ('');
  }
}
