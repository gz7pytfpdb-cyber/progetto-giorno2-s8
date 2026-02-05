import "bootstrap/dist/css/bootstrap.min.css";
import MyNavBar from "./components/MyNavBar";
import MyFooter from "./components/MyFooter";
import Welcome from "./components/Welocme";
import BookList from "./components/BookList";
import History from "./Data/books/history.json";
import CommentArea from "./components/CommentArea";
function App() {
  return (
    <>
      <MyNavBar brand="EpiBook" />
      <Welcome />
      <BookList books={History} />
      <MyFooter />
    </>
  );
}

export default App;
