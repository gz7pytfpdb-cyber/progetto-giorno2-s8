import { Component } from "react";
import CommentList from "./CommentList";
import AddComment from "./AddComment";

class CommentArea extends Component {
  state = { comments: [] };
  GetComments = () => {
    const fetchURL = `https://striveschool-api.herokuapp.com/api/comments/${this.props.asin}`;

    fetch(fetchURL, {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OTczM2Q0Njg1ZTNiMTAwMTViNWVkOTAiLCJpYXQiOjE3NzAzMDMyOTYsImV4cCI6MTc3MTUxMjg5Nn0.J_uMfQej1JyBhgkd_AVpMD9K7vyOqzIbX-ddI3JhOLc",
      },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error("errore");
        }
      })
      .then((data) => {
        this.setState({ comments: data });
      })
      .catch((err) => console.log(err + " stai sbagliando"));
  };
  componentDidMount() {
    this.GetComments();
  }
  render() {
    return (
      <>
        <CommentList list={this.state.comments} />

        <AddComment />
      </>
    );
  }
}
export default CommentArea;
