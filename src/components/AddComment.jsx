import { Component } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { FloatingLabel } from "react-bootstrap";

class AddComment extends Component {
  state = {
    comment: "",
    rate: 1,
    elementId: this.props.asin,
  };

  AddComment() {
    const fetchURL = `https://striveschool-api.herokuapp.com/api/comments/${this.props.asin}`;


    const commentData = {
        comment : this.state.comment,
        rate: this.state.rate,
        elementId:this.props.asin
    }
  }

  fetch(fetchURL,){
    method:"POST",
    headers:{
        Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OTczM2Q0Njg1ZTNiMTAwMTViNWVkOTAiLCJpYXQiOjE3NzAzMDMyOTYsImV4cCI6MTc3MTUxMjg5Nn0.J_uMfQej1JyBhgkd_AVpMD9K7vyOqzIbX-ddI3JhOLc",
            body: JSON.stringify(commentData)
  }
  }

  render() {
    return (
      <>
        <FloatingLabel controlId="floatingTextarea" label="Comments" className="mb-3">
          <Form.Control as="textarea" placeholder="Leave a comment here" />
        </FloatingLabel>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </>
    );
  }
}
export default AddComment;
