import { Row, Nav, InputGroup, Form, Col } from "react-bootstrap";
import { Component } from "react";
import Container from "react-bootstrap/esm/Container";
import SingleBook from "./SingleBook";

class BookList extends Component {
  state = {
    searchQuery: "",
    asin: null,
  };

  render() {
    return (
      <Container fluid className="px-0 mx-1 justify-content-center">
        <Nav>
          <InputGroup className="col-12 col-lg-6 mx-auto mb-4">
            <Form.Control
              className="border-dark mt-3"
              placeholder="Type to Search Books..."
              onChange={(event) => {
                this.setState({
                  searchQuery: event.target.value,
                });
              }}
            ></Form.Control>
          </InputGroup>
        </Nav>
        <Row className="mx-1 justify-content-center">
          <Col>
            <Row>
              {this.props.FantasyBooks.map((book) => {
                return (
                  book.title.toLowerCase().includes(this.state.searchQuery) && (
                    <SingleBook
                      setAsin={this.props.setAsin}
                      key={book.asin}
                      singleBook={book}
                    ></SingleBook>
                  )
                );
              })}
            </Row>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default BookList;
