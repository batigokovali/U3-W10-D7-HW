import { Component } from "react";
import CommentsList from "./CommentsList";
import { useState, useEffect } from "react";
const url = "https://striveschool-api.herokuapp.com/api/comments/";

class CommentsArea extends Component {
  state = {
    comments: [],
  };

  componentDidMount() {
    this.fetchComments();
  }

  fetchComments = async () => {
    try {
      let response = await fetch(url + this.props.setAsin, {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2RiYzJjMDUwMWZlODAwMTU2MGMyMzUiLCJpYXQiOjE2NzUzNDY2MjQsImV4cCI6MTY3NjU1NjIyNH0.L9TWAnkkI6V95MFjHRHarcB_cj1rJo5fo-QWNsZgByE",
        },
      });
      console.log(response);
      if (response.ok) {
        let data = await response.json();
        console.log(data);
        this.setState({
          comments: data,
        });
      } else {
      }
    } catch (error) {
      console.log(error);
    }
  };

  componentDidUpdate = (prevProps, prevState) => {
    console.log("Book ASIN Updated!");
    console.log("Previous ASIN was:", prevProps);
    console.log("Current ASIN is:", this.props);
    if (prevProps.setAsin !== this.props.setAsin) {
      console.log("Update on asin!");
      this.fetchComments();
    }
  };

  render() {
    return this.state.comments.map((comment) => {
      return (
        <>
          {this.props.setAsin ? (
            <CommentsList
              key={comment._id}
              singleComment={comment}
            ></CommentsList>
          ) : (
            <div>Loading Comments...</div>
          )}
        </>
      );
    });
  }
}

export default CommentsArea;
