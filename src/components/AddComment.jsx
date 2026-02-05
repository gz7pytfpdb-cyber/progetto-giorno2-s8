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
