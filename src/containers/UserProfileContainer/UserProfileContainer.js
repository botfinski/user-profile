import React, { Component } from 'react';
import UserProfile from '../../components/UserProfile/UserProfile';

class UserProfileContainer extends Component {
	state = {
		userData: {},
		dataLoaded: false
	}

	componentDidMount() {
		fetch('data/userData.json')
			.then(response => response.json())
			.then(json => this.setState({
				dataLoaded:true,
				userData:json
			}))
	}

	handleShareClicked() {
		let newWindow = window.open("about:blank", "", "height=200,width=200,_blank");
		newWindow.document.write(window.location.href);
	}

	handleLikeClicked = this.handleLikeClicked.bind(this)	
	handleLikeClicked() {
		let updatedData = {...this.state.userData}
		updatedData.stats.likes = updatedData.stats.likes+1
		this.setState({userData: updatedData})
	}

	handleFollowClicked = this.handleFollowClicked.bind(this)	
	handleFollowClicked() {
		let updatedData = {...this.state.userData}
		updatedData.stats.followers = updatedData.stats.followers+1
		this.setState({userData: updatedData})
	}

	render() {
		if(!this.state.dataLoaded) {
			return(
				<p>Loading user data...</p>
			)
		} else {
			return(
				<UserProfile 
					user={this.state.userData}
					shareClicked={this.handleShareClicked}
					likeClicked={this.handleLikeClicked}
					followClicked={this.handleFollowClicked}
					accountInfo={this.props.accountInfo}
					/>
			)
		}
	}
}

export default UserProfileContainer;