import SingleComment from "./SingleComment";

const CommentsList = (props) => {
  return (
    <SingleComment
      singleCommentID={props.singleComment._id}
      singleCommentToRender={props.singleComment.comment}
    ></SingleComment>
  );
};

export default CommentsList;
