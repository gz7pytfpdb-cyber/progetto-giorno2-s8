import { Component } from "react";
import History from "./Data/books/history.json";
import { Container } from "react-bootstrap";
import Card from "react-bootstrap/Card";

class AllTheBooks extends Component {
  render() {
    return (
      <Container>
        {History.map((book) => (
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={book.img} />
            <Card.Body>
              <Card.Title>{book.title}</Card.Title>
              <Card.Text>{book.price}</Card.Text>
              <Card.Text>{book.category}</Card.Text>
            </Card.Body>
          </Card>
        ))}
      </Container>
    );
  }
}
export default AllTheBooks;
