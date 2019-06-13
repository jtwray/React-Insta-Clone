import React from "react";
import PropTypes from "prop-types";
import CommentSection from "../CommentSection/CommentSection";

const PostContainer =(props) => {
    return(
        <div>
        <CommentSection comments={props.postdata.comments}/>
        
        </div>
    )
}



export default PostContainer;

 

  