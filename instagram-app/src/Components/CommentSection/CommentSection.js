import React from "react";
import Comment from "../Comment/Comment";
import Inputbox from "../InputBox/InputBox";
import PropTypes from "prop-types";

const CommentSection = props => {
	return (
		<div>
   
    <h1> {props.commentObj.username}</h1>
			<Comment
				commentProp={props.commentObj.comments}
			/>

			<Inputbox />
		</div>
	);
};

export default CommentSection;
