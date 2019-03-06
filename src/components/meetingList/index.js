import React, { Component } from 'react';
import './style.css';

import Api from '../../api';

class MeetingList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
    };
  }

  componentDidMount() {
    Api.Meetings.list().then(
      result => {
        console.log(result);
        this.setState({
          isLoaded: true,
          items: result,
        });
      },
      error => {
        this.setState({
          isLoaded: true,
          error,
        });
      }
    );
  }

  render() {
    return (
      <div className="meeting-list-wrapper">
        <div className="meeting-list">
          {this.state.items.map(u => {
            return (
              <div key={u.meeting} className="list-item">
                <span className="list-name">{u.host} </span>
                <span className="list-meeting">{u.meeting} </span>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default MeetingList;
