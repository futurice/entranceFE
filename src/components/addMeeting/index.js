import React, { Component } from 'react';
import './style.css';

class AddMeeting extends Component {
	constructor(props) {
		super(props);
		this.state = {
			host: '',
			meeting : '',
			room: ''
		}
	}

	render() {
		return (
			<div className="add-meeting-wrapper">
				<div className="add-meeting-form">
					<div>
						<p className="add-meeting-label"> You are? </p>
						<input className="add-meeting-input" onChange={evt => this.updateHost(evt)}/>
					</div>
					<div>
						<p className="add-meeting-label"> Meeting name? </p>
						<input className="add-meeting-input" onChange={evt => this.updateMeeting(evt)}/>
					</div>
					<div>
						<p className="add-meeting-label"> Meeting room? </p>
						<input className="add-meeting-input" onChange={evt => this.updateRoom(evt)}/>
					</div>
				</div>
				<div className="add-button-wrapper">
					<button className="add-meeting-button" onClick={evt => this.addMeeting(evt)}> Add your meeting </button>
				</div>
			</div>
		);
	}

	updateHost(evt) {
		console.log(this.state);
		this.setState({
			host: evt.target.value
		})
	}
	updateMeeting(evt) {
		console.log(this.state);
		this.setState({
			meeting: evt.target.value
		})
	}
	updateRoom(evt) {
		console.log(this.state);
		this.setState({
			room: evt.target.value
		})
	}
	addMeeting(event){
		event.preventDefault();
		fetch('http://localhost:8000/meetings', {
			method: 'post',
			headers: {'Content-Type':'application/json'},
			body: JSON.stringify(this.state)
		});
	};
}



export default AddMeeting;
