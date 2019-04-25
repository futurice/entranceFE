import React, { Component } from 'react';
import './sidebar.css';
import AddMeeting from './addMeeting/addMeeting';
import Header from './header/header.js';

class Sidebar extends Component {
  render() {
    return (
      <div className="sidebar-wrapper">
        <Header />
        <AddMeeting getData={this.props.getData} />
      </div>
    );
  }
}
export default Sidebar;
