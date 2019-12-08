import React from 'react'
import { connect } from 'react-redux'

/* const postFormRef = React.createRef()
const epicStyling = {
	width: '45rem'
} */

const CommentList = props => {
	const comments = props.comments
	const id = props.id
	const url = 'http://localhost:3001/api/uploads/'
	return (
		<div>
			{comments
				.filter(comment => comment.post === id)
				.map(comment => (
					<div className='card mb-1 mt-3 background' key={comment.id}>
						<h5>{props.id}</h5>
						<p className='card-body'>{comment.content}</p>
						{comment.postImg === null ? null : (
							<img
								className='horizontalLine mb-1'
								src={url + comment.postImg}
								width='400'
								height='400'
							/>
						)}
					</div>
				))}
		</div>
	)
}
const mapStateToProps = state => {
	return {
		comments: state.comments,
		posts: state.posts
	}
}
//const mapDispatchToProps = { setNotification, vote }
const ConnectedComments = connect(mapStateToProps)(CommentList)
export default ConnectedComments
