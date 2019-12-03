import React from 'react'
import { connect } from 'react-redux'

const postFormRef = React.createRef()
const epicStyling = {
	width: '45rem'
}

const CommentList = props => {
	const comments = props.comments
	const id = props.id

	return (
		<div>
			{comments
				.filter(comment => comment.post === id)
				.sort()
				.reverse()
				.map(comment => (
					<div className='card mb-1 text-muted mt-3' key={comment.id}>
						<h5>{props.id}</h5>
						<p className='card-body'>{comment.content}</p>
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
