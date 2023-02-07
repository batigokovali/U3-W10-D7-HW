import { Component } from "react";
import { Card } from "react-bootstrap";
import Button from "react-bootstrap/Button";
const deleteURL = "https://striveschool-api.herokuapp.com/api/comments/";

const singleComment = (props) => {
  const deleteComment = async () => {
    try {
      let response = await fetch(deleteURL + props.singleCommentID, {
        method: "DELETE",
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2RiYzJjMDUwMWZlODAwMTU2MGMyMzUiLCJpYXQiOjE2NzUzNDY2MjQsImV4cCI6MTY3NjU1NjIyNH0.L9TWAnkkI6V95MFjHRHarcB_cj1rJo5fo-QWNsZgByE",
        },
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Card.Text>{props.singleCommentToRender}</Card.Text>
      <Button variant="danger" onClick={deleteComment}>
        Delete Comment {props.singleCommentID}
      </Button>
    </>
  );
};

export default singleComment;
