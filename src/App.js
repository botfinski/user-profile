import React, { Component } from 'react';
import UserProfileContainer from './containers/UserProfileContainer/UserProfileContainer';

class App extends Component {
	state = {
		loggedUser: {
			id: 999,
			name: 'Logged User'
		}
	}

	render() {
		return (
			<UserProfileContainer accountInfo={this.state.loggedUser} />
		);
	}
}

export default App;
