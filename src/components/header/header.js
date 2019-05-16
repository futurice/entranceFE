import React, { Component } from 'react';
import './header.css';

class MeetingList extends Component {
  render() {
    return (
      <div className="header-wrapper">
        <h1 className="header-logo-text">
          {' '}
          Futurice
          <br />
          Entrance App{' '}
        </h1>
      </div>
    );
  }
}

export default MeetingList;
