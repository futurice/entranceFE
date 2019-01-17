import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import './style.css';

class AddMeeting extends Component {
	constructor(props) {
		super(props);
		this.state = {
			meeting: {
				host: '',
				phone: '',
				meeting: '',
				room: '',
				date: this.newDateToString()
			},
			added: false
		}
	}

	render() {
		return (
			<div className="add-meeting-wrapper">
				<div className="add-meeting-form">
					<div>
						<p className="add-meeting-label"> You are? </p>
						<input id="host" className="add-meeting-input" value={this.state.meeting.host} onChange={evt => this.updateMeeting(evt)}/>
					</div>
					<div>
						<p className="add-meeting-label"> Your phone? </p>
						<input id="phone" className="add-meeting-input" value={this.state.meeting.phone} onChange={evt => this.updateMeeting(evt)} />
					</div>
					<div>
						<p className="add-meeting-label"> Meeting name? </p>
						<input id="meeting" className="add-meeting-input" value={this.state.meeting.meeting} onChange={evt => this.updateMeeting(evt)}/>
					</div>
					<div>
						<p className="add-meeting-label"> Meeting room? </p>
						<input id="room" className="add-meeting-input" value={this.state.meeting.room} onChange={evt => this.updateMeeting(evt)}/>
					</div>
					<div>
						<p className="add-meeting-label"> Date/time ? </p>
						<div className="datetime-picker-wrap">
							<TextField
								id="datetime-local"
								type="datetime-local"
								defaultValue={this.newDateToString()}
								className="datetime-picker"
								InputLabelProps={{
									shrink: true,
								}}
								onChange={evt => this.updateMeeting(evt)}
							/>
						</div>
					</div>
				</div>
				<div className="add-button-wrapper">
					<button className="add-meeting-button" onClick={evt => this.addMeeting(evt)}> Add your meeting </button>
				</div>
			</div>
		);
	}

	updateMeeting(evt) {
		let { meeting } = this.state;

		switch(evt.target.id) {
			case 'host': meeting.host = evt.target.value; break;
			case 'phone': meeting.phone = evt.target.value; break;
			case 'meeting': meeting.meeting = evt.target.value; break;
			case 'room': meeting.room = evt.target.value; break;
			case 'datetime-local': meeting.date = evt.target.value; break;
		}
		this.setState({ meeting });
	}

	addMeeting(event){
		event.preventDefault();
		console.log(this.state);
		fetch('http://localhost:8000/meetings', {
			method: 'post',
			headers: {'Content-Type':'application/json'},
			body: JSON.stringify(this.state.meeting)
		}).then(() => {
			this.setState({
				meeting: {
					host: '',
					phone: '',
					meeting: '',
					room: '',
					date: this.newDateToString()
				}
			})
		});
	};

	newDateToString() {
		return new Date().toISOString().split('.')[0].slice(0, -3)
	}
}



export default AddMeeting;
