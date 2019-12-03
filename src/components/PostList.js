import React from 'react'
import Togglable from './Togglable'
import CommentForm from './CommentForm'
import CommentList from './CommentList'
import { connect } from 'react-redux'

const postFormRef = React.createRef()
const epicStyling = {
	width: '55rem'
}

const PostList = props => {
	const posts = props.posts
	return (
		<div className="container" style={epicStyling}>
			<div className="well">
				{posts
					.sort()
					.reverse()
					.map(post => (
						<div className="media bg-dark mb-3" key={post.id}>
							<div className="media-body card-body inline">
								<img
									src={require('../images/apache.png')}
									className="media-object imageToLeft"
									alt="kuva"
									width="64"
									height="64"
								></img>
								<h2 className="media-heading">{post.title}</h2>
								<br></br>
								<p className="horizontalLine mb-1">{post.content}</p>
								<div className="listStyling">
									<ul className="listStyling">
										<li>
											{' '}
											<a className="listStyling">{post.date}</a>
										</li>
										<li className="">
											<a className="listStyling ">
												<img
													src={require('../images/ok_sign.jpg')}
													className=" imageToLeft "
													alt="kuva"
													width="32"
													height="32"
												></img>
											</a>
										</li>

										<li className="">
											<a className="listStyling">asd</a>
										</li>
									</ul>
								</div>
								<p className="horizontalLine pb-1"></p>
								<CommentList id={post.id} />
								{props.user !== null ? (
									<Togglable buttonLabel="Comment" ref={postFormRef}>
										<CommentForm id={post.id} />
									</Togglable>
								) : (
									console.log('näin päästiin errorista eroon')
								)}
							</div>
						</div>
					))}
			</div>
		</div>
	)
}
const mapStateToProps = state => {
	return {
		posts: state.posts
	}
}
//const mapDispatchToProps = { setNotification, vote }
const ConnectedPosts = connect(mapStateToProps)(PostList)
export default ConnectedPosts
