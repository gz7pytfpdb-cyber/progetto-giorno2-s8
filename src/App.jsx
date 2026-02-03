import "bootstrap/dist/css/bootstrap.min.css";
import MyNavBar from "./components/MyNavBar";
import MyFooter from "./components/MyFooter";
import Welcome from "./components/Welocme";
import AllTheBooks from "./components/AllTheBooks";
function App() {
  return (
    <>
      <MyNavBar brand="EpiBook" />
      <Welcome />
      <AllTheBooks />
      <MyFooter />
    </>
  );
}

export default App;
