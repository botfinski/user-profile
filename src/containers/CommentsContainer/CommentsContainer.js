import React, { Component } from 'react';
import CommentsList from '../../components/CommentsList/CommentsList';
import CommentInput from '../../components/CommentInput/CommentInput';
import PropTypes from 'prop-types';

class CommentsContainer extends Component {
	state = {
		comments: [],
		commentsLoaded: false,
		commentsHidden: false
	}

	componentDidMount() {
		fetch('data/comments.json')
			.then(response => response.json())
			.then(json => this.setState({
				commentsLoaded:true,
				comments:json.sort((a,b) => a.date > b.date)
			}))
	}
	
	handleCommentsToggle = this.handleCommentsToggle.bind(this)
	handleCommentsToggle() {
		this.setState(prevState => ({
			commentsHidden: !prevState.commentsHidden
		}));
	}

	handleAddComment = this.handleAddComment.bind(this)
	handleAddComment(e) {
		e.preventDefault()

		let updatedComments = [...this.state.comments]
		let date = new Date()
		let newComment = {
			author: {
				id: this.props.accountInfo.id,
				name: this.props.accountInfo.name
			},
			comment:this.commentInputRef.value,
			date: date.toJSON()
		}

		if(newComment.comment) {
			updatedComments.push(newComment)
			this.commentInputRef.value = ''

			if(this.state.commentsHidden) {
				this.handleCommentsToggle()
			}			
		}
	
		this.setState({comments:updatedComments})
	}

	render() {
		if(!this.state.commentsLoaded) {
			return(
				<p>Loading comments...</p>
			)
		} else {
			return(
				<div>
					<CommentsList
						comments={this.state.comments}
						toggleComments={this.handleCommentsToggle}
						hidden={this.state.commentsHidden} />
					<CommentInput
						inputChanged={this.handleInputChanged}
						addComment={this.handleAddComment}
						inputRef={input => this.commentInputRef = input} />
				</div>
				
			)
		}
	}
}


CommentsContainer.propTypes = {
	accountInfo:PropTypes.object
}
export default CommentsContainer;