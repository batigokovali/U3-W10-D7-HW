import { Component } from "react";
import SingleComment from "./SingleComment";

class CommentsList extends Component {
  render() {
    return (
      <SingleComment
        singleCommentID={this.props.singleComment._id}
        singleCommentToRender={this.props.singleComment.comment}
      ></SingleComment>
    );
  }
}

export default CommentsList;
