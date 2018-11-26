import React, { Component } from 'react';
import  MeetingList  from './components/meetingList';
import AddMeeting from './components/addMeeting';
import Header from './components/header'

class App extends Component {

  render() {
    return (
      <div>
        <Header/>
       <AddMeeting/>
      </div>
    );
  }
}

export default App;
