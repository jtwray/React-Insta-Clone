import React from "react";
import PropTypes from "prop-types";
import CommentSection from "../CommentSection/CommentSection";

const PostContainer = props => {
	return (
		<div>
			{props.dummyData.map(commentObj => (
				<div>
					<CommentSection key={commentObj.id} commentObj={commentObj} />
					<img src={commentObj.imageUrl} alt={commentObj.username} />
				</div>
			))}
		</div>
	);
};

export default PostContainer;
