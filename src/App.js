import "./App.css";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNav from "./components/MyNav";
import MyFooter from "./components/MyFooter";
import MyJumbotron from "./components/MyJumbotron";
import FantasyBooks from "./books/fantasy.json";
import BookList from "./components/BookList";
import CommentsArea from "./components/CommentsArea";
import { Row, Col } from "react-bootstrap";
import { Component } from "react";

class App extends Component {
  state = {
    asin: undefined,
  };

  setAsin = (asin) => {
    console.log(this.state.asin);
    this.setState({
      asin: asin,
    });
  };

  render() {
    return (
      <div className="App">
        <MyNav></MyNav>
        <MyJumbotron></MyJumbotron>
        <Row>
          <Col lg={8}>
            <BookList
              FantasyBooks={FantasyBooks}
              setAsin={this.setAsin}
            ></BookList>
          </Col>
          <Col lg={4}>
            <h3 className="mt-3">Comments</h3>
            <CommentsArea setAsin={this.state.asin}></CommentsArea>
          </Col>
        </Row>
        <MyFooter></MyFooter>
      </div>
    );
  }
}

export default App;
