import CommentsList from "./CommentsList";
import { useState, useEffect } from "react";
const url = "https://striveschool-api.herokuapp.com/api/comments/";

const CommentsArea = (props) => {
  const [comments, setComments] = useState([]);
  const [asin, setAsin] = useState("");

  const fetchComments = async () => {
    try {
      let response = await fetch(url + props.asinToSend, {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2RiYzJjMDUwMWZlODAwMTU2MGMyMzUiLCJpYXQiOjE2NzUzNDY2MjQsImV4cCI6MTY3NjU1NjIyNH0.L9TWAnkkI6V95MFjHRHarcB_cj1rJo5fo-QWNsZgByE",
        },
      });
      console.log(response);
      if (response.ok) {
        let data = await response.json();
        console.log(data);
        setComments(data);
        console.log(props.asinToSend);
      } else {
      }
    } catch (error) {
      console.table(error);
    }
  };

  useEffect(() => {
    fetchComments();
  }, [props.asinToSend]);

  return comments.map((comment) => {
    return (
      <>
        {props.asinToSend !== "" && (
          <CommentsList
            key={comment._id}
            singleComment={comment}
          ></CommentsList>
        )}
      </>
    );
  });
};

export default CommentsArea;
