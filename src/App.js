import React, { Component } from 'react';
import MeetingList from './components/meetingList';
import AddMeeting from './components/addMeeting';
import Header from './components/header';

import Api from './api';

class App extends Component {
  constructor(props) {
    super(props);

    this.fetchData = this.fetchData.bind(this);
  }

  state = {
    data: [],
  };

  fetchData() {
    Api.Meetings.list().then(
      result => {
        this.setState({
          data: result,
        });
      },
      error => {
        this.setState({
          error,
        });
      }
    );
  }

  render() {
    return (
      <div>
        <Header />
        <AddMeeting getData={this.fetchData} />
        <MeetingList data={this.state.data} getData={this.fetchData} />
      </div>
    );
  }
}

export default App;
