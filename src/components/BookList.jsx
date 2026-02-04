import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import SingleBook from "./SingleBook";

const BookList = function (props) {
  return (
    <Container>
      <Row>
        {props.books.map((book) => {
          <SingleBook key={book.asin} img={book.img} title={book.title} category={book.category} price={book.price} />;
        })}
      </Row>
    </Container>
  );
};
export default BookList;
