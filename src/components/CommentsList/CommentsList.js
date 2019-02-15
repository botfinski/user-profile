import React, { Component } from 'react';
import Date from '../Date/Date';
import './CommentsList.scss';
import PropTypes from 'prop-types';

class CommentsList extends Component {

	commentsListRef = React.createRef()

	componentDidUpdate(prevProps) {
		if (this.props.comments.length > prevProps.comments.length) {
			this.commentsListRef.current.scrollTop = this.commentsListRef.current.scrollHeight;
		}
	}

	render() {

		return(
			<div className='Comments-List-Container'>
				<button
					className='Comments-Toggle-Button'
					onClick={this.props.toggleComments}>{this.props.hidden ? 'Show comments' : 'Hide comments'} ({this.props.comments.length})</button>
				<div
					ref={this.commentsListRef}
					className={'Comments-List' + (this.props.hidden ? ' hidden' : '')}>
					<ul>
						{
							this.props.comments.map((comment, index) => {
								const imgName = 'data/images/' + comment.author.name.replace(/\s/g, '').toLowerCase() + comment.author.id;

								return(
									<li
										className='Comment'
										key={'comment'+index}>
										<img 
											className='Comment-Avatar'
											alt={comment.author.name + ' avatar'}											
											srcSet={imgName + '.jpg 1x,' + imgName + '@2x.jpg 2x'}
											src={imgName} />
										
										<div className='Comment-Content'>
											<p className='Comment-Author'>
												{comment.author.name} 
												<span>
													<Date date={comment.date}/>
												</span>
											</p>
											
											<p className='Comment-Text'>{comment.comment}</p>
										</div>
									</li>
								)
							})
						}
					</ul>
				</div>	
			</div>
		);
	}
}

CommentsList.propTypes = {
	comments: PropTypes.array,
	hidden: PropTypes.bool
}
export default CommentsList;