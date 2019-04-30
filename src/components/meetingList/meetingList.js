import React, { Component } from 'react';
import './meetingList.css';
import moment from 'moment';

import Api from '../../api';

class MeetingList extends Component {
  componentDidMount() {
    this.props.getData();
  }

  render() {
    return (
      <div className="meeting-list-wrapper">
        <div className="container">
          <div className="item_1_4" />
          <h2 className="meeting-list-head">Upcoming meetings</h2>
        </div>

        <div className="meeting-list">
          {this.props.data.map(u => {
            return (
              <div className="container" key={u.meeting}>
                <div className="item_1_4">
                  <h2 className="list-date"> {this.getDay(u.date)} </h2>
                </div>
                <div className="list-item">
                  <span className="list-time">
                    {' '}
                    {this.getTime(u.date)} | {u.host}{' '}
                  </span>
                  <button
                    className="list-delete"
                    onClick={() => {
                      this.deleteMeeting(u._id);
                    }}
                  />
                  <span className="list-meeting">{u.meeting} </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  getDay(date) {
    return moment(date)
      .utc()
      .format('ll');
  }
  getTime(date) {
    return moment(date)
      .utc()
      .format('LT');
  }

  deleteMeeting(id) {
    Api.Meetings.delete(id).then(() => {
      this.props.getData();
    });
  }
}

export default MeetingList;
