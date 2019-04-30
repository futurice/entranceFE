import React, { Component } from 'react';
import MeetingList from './components/meetingList/meetingList';
import Sidebar from './components/sidebar/sidebar';
import './App.css';

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
      <div className="app-wrapper">
        <aside>
          <Sidebar getData={this.fetchData} />
        </aside>
        <main>
          <MeetingList data={this.state.data} getData={this.fetchData} />
        </main>
      </div>
    );
  }
}

export default App;
