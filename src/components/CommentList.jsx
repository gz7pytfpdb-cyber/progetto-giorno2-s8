import { ListGroupItem } from "react-bootstrap";
import ListGroup from "react-bootstrap/ListGroup";

const CommentList = function (props) {
  return (
    <ListGroup>
      {props.list.map((comment) => (
        <ListGroupItem key={comment.elementId}>
          <p>{comment.comment}</p>
          <p>{comment.rate}</p>
        </ListGroupItem>
      ))}
    </ListGroup>
  );
};
export default CommentList;
