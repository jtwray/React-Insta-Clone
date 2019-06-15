import React from "react";
import PropTypes from "prop-types";

const Comment = props => {
	return (
		<div>
			<p>{props.commentProp.comments}</p>
		</div>
	);
};

export default Comment;
