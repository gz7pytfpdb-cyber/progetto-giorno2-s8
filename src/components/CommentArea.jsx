import { Component } from "react";
import CommentList from "./CommentList";
import AddComment from "./AddComment";

class CommentArea extends Component {
  state = {};
  render() {
    return (
      <>
        {/* <CommentList list={this.state.comments} /> */}

        <AddComment />
      </>
    );
  }
}
export default CommentArea;
