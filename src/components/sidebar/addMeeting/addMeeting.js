import React, { Component } from 'react';
import './addMeeting.css';

import Api from '../../../api';

const FloatingInput = ({ label, id, value, updateMeeting }) => (
  <div className="float-container">
    <label htmlFor={id}>{label}</label>
    <input
      id={id}
      className="add-meeting-input"
      value={value}
      onChange={updateMeeting}
    />
  </div>
);

const newDateToString = () =>
  new Date()
    .toISOString()
    .split('.')[0]
    .slice(0, -3);

const newMeeting = () => ({
  host: '',
  phone: '+49',
  meeting: '',
  date: newDateToString(),
});

class AddMeeting extends Component {
  constructor(props) {
    super(props);
    this.updateMeeting = this.updateMeeting.bind(this);

    this.state = {
      meeting: newMeeting(),
      added: false,
    };
  }

  render() {
    return (
      <div className="add-meeting-wrapper">
        <h2 className="add-meeting-head">Add meeting</h2>
        <div className="add-meeting-form">
          <FloatingInput
            id="host"
            label="You are?"
            value={this.state.meeting.host}
            updateMeeting={this.updateMeeting}
          />
          <FloatingInput
            id="phone"
            label="Your phone?"
            value={this.state.meeting.phone}
            updateMeeting={this.updateMeeting}
          />
          <FloatingInput
            id="meeting"
            label="Meeting name?"
            value={this.state.meeting.meeting}
            updateMeeting={this.updateMeeting}
          />

          <div className="float-container">
            <label htmlFor="datetime-local">Date and Time?</label>
            <input
              id="datetime-local"
              max="9999-12-31T23:59"
              type="datetime-local"
              defaultValue={newDateToString()}
              onChange={this.updateMeeting}
            />
          </div>
        </div>
        <div className="add-button-wrapper">
          <button
            className="add-meeting-button"
            onClick={evt => this.addMeeting(evt)}
          >
            {' '}
            Add your meeting{' '}
          </button>
        </div>
      </div>
    );
  }

  updateMeeting(evt) {
    let { meeting } = this.state;

    switch (evt.target.id) {
      case 'host':
        meeting.host = evt.target.value;
        break;
      case 'phone':
        meeting.phone = evt.target.value;
        break;
      case 'meeting':
        meeting.meeting = evt.target.value;
        break;
      case 'datetime-local':
        meeting.date = evt.target.value;
        break;
      default:
        break;
    }
    this.setState({ meeting });
  }

  addMeeting(event) {
    event.preventDefault();
    Api.Meetings.add(this.state.meeting).then(() => {
      this.setState({
        meeting: newMeeting(),
      });
      this.props.getData();
    });
  }
}

export default AddMeeting;
