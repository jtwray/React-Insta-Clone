import React from "react";
import Comment from "../Comment/Comment";
import Inputbox from "../InputBox/InputBox";
import PropTypes from "prop-types";

class CommentSection extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        commentdata: props.comments
      };
    }
    render(){
     
        return (
            <div>
             this.state.commentdata.map(comments =>
                <Comment posterProp={this.props.comments.id}
                         textProp={this.props.comments.text}
                />)
                       
            <Inputbox  />
            </div>
        );    
    
  }
  }

export default CommentSection;

