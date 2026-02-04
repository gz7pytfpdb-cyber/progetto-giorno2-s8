import { Component } from "react";
import { Card } from "react-bootstrap";
import Col from "react-bootstrap/Col";
class SingleBook extends Component {
  state = {
    selected: false,
  };
  render() {
    return (
      <Col xs={12} md={6} lg={4} key={this.props.asin}>
        <Card
          style={this.state.selected ? { boxShadow: "0 0 10px yellow", width: "18rem" } : { width: "18rem" }}
          onClick={() =>
            this.setState({
              selected: !this.state.selected,
            })
          }
        >
          <Card.Img variant="top" src={this.props.img} />
          <Card.Body>
            <Card.Title>{this.props.title}</Card.Title>
            <Card.Text>{this.props.price}</Card.Text>
            <Card.Text>{this.props.category}</Card.Text>
          </Card.Body>
        </Card>
      </Col>
    );
  }
}

export default SingleBook;
