import React, { Component } from 'react';
import './style.css';

import Api from '../../api';

class MeetingList extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getData();
  }

  render() {
    return (
      <div className="meeting-list-wrapper">
        <div className="meeting-list">
          {this.props.data.map(u => {
            return (
              <div key={u.meeting} className="list-item">
                <span className="list-time"> {this.getTime(u.date)} </span>
                <span className="list-name">{u.host} </span>
                <span className="list-meeting">{u.meeting} </span>
                <button
                  className="list-delete"
                  onClick={() => {
                    this.deleteMeeting(u._id);
                  }}
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  getTime(date) {
    return date.split('T')[1];
  }

  deleteMeeting(id) {
    Api.Meetings.delete(id).then(() => {
      this.props.getData();
    });
  }
}

export default MeetingList;
