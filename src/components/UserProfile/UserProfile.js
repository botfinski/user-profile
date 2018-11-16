import React from 'react';
import PropTypes from 'prop-types';
import CommentsContainer from '../../containers/CommentsContainer/CommentsContainer';
import './UserProfile.scss'

const userProfile = (props) => (
	<div className='User-Profile'>
		<div className='User-Info'>
			<button 
				type='button'
				className='Share-Button'
				onClick={props.shareClicked}>
					Share
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="15" height="15" preserveAspectRatio="xMidYMid meet">
					<g>
						<path fill="#FFA640" d="M392.9 292.4h-18.3a8.8 8.8 0 0 0-9.2 9V393A44 44 0 0 1 352 425a44 44 0 0 1-32.2 13.4H82.2A44 44 0 0 1 50 425.1 44 44 0 0 1 36.5 393V155.3A44 44 0 0 1 50 123.1a44 44 0 0 1 32.2-13.5h201c2.7 0 4.9-.8 6.6-2.5a8.9 8.9 0 0 0 2.6-6.6V82.2a8.9 8.9 0 0 0-9.1-9.1h-201c-22.7 0-42 8-58.2 24.1A79.2 79.2 0 0 0 0 155.3V393c0 22.6 8 42 24.1 58 16.1 16.1 35.5 24.2 58.1 24.2h237.6c22.6 0 42-8 58-24.1 16.2-16.1 24.2-35.5 24.2-58.1v-91.4a8.9 8.9 0 0 0-9.1-9.1z"/>
						<path fill="#FFA640" d="M506.2 42c-3.6-3.6-8-5.5-12.9-5.5H347.2c-5 0-9.3 1.9-12.9 5.5-3.6 3.6-5.4 7.9-5.4 12.8s1.8 9.3 5.4 12.9l50.3 50.2-186.2 186.2a9 9 0 0 0 0 13.1l32.6 32.5a9 9 0 0 0 13.1 0l186.2-186.1 50.2 50.2c3.6 3.7 7.9 5.5 12.9 5.5s9.2-1.8 12.8-5.5c3.6-3.6 5.4-7.9 5.4-12.8V54.8c0-5-1.8-9.2-5.4-12.8z"/>
					</g>
				</svg>
			</button>

			<div className='User-Info-Personal'>
				<img
					className='User-Avatar'
					srcSet={'data/images/' + props.user.name.replace(/\s/g, '').toLowerCase() + props.user.id + '.jpg 1x,  data/images/' + props.user.name.replace(/\s/g, '').toLowerCase() + props.user.id + '@2x.jpg 2x'}
					src={'data/images/' + props.user.name.replace(/\s/g, '').toLowerCase() + props.user.id + '.jpg'} 
					alt={props.user.name + ' avatar'}/>
				<p className='User-Name'>
					{props.user.name}
					<button 
						className='Like-Button'
						type='button'
						onClick={props.likeClicked}>
							Like
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 20 380 370" width="15" height="15" preserveAspectRatio="xMidYMid meet">
								<path fill="#d3d3d3" d="M348.2 54.5a104.6 104.6 0 0 0-74.5-30.8c-28.1 0-54.5 11-74.4 30.8l-9.8 9.8-9.8-9.8a104.6 104.6 0 0 0-74.5-30.8 105.4 105.4 0 0 0-74.4 179.7l147 147a16 16 0 0 0 11.8 4.9c4.1 0 8.3-1.6 11.5-4.8l147-147.1c41.1-41 41.1-107.8 0-148.9zm-23 125.9L189.5 316.1 53.8 180.4A72.8 72.8 0 0 1 156.7 77.5L178 98.8a16.7 16.7 0 0 0 23 0l21.3-21.3a72.3 72.3 0 0 1 51.4-21.3 72.8 72.8 0 0 1 51.4 124.2z"/>
							</svg>
					</button>
				</p>
				
				<p className='User-Location'>{props.user.location}</p>	
			</div>

			<div className='User-Info-Social'>
				<ul className='User-Stats'>
					{
						Object.keys(props.user.stats).map((key,index) => {
							return(
								<li key={key+index} >
									<p className='Stat-Count'>{props.user.stats[key]}</p>
									<p className='Stat-Name'>{key}</p>
								</li>
							)
						})
					}
				</ul>
				<button 
					className='Follow-Button'
					type='button'
					onClick={props.followClicked}>Follow</button>	
			</div>
		</div>

		<CommentsContainer accountInfo={props.accountInfo} />
	</div>	
);

userProfile.propTypes = {
	user: PropTypes.object,
	shareClicked: PropTypes.func,
	likeClicked: PropTypes.func,
	followClicked: PropTypes.func,
	accountInfo: PropTypes.object
}

export default userProfile;