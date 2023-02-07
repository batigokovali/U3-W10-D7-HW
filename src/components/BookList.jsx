import { Row, Nav, InputGroup, Form, Col } from "react-bootstrap";
import Container from "react-bootstrap/esm/Container";
import SingleBook from "./SingleBook";
import { useEffect, useState } from "react";

const BookList = (props) => {
  const [searchQuery, setSearch] = useState("");

  return (
    <Container fluid className="px-0 mx-1 justify-content-center">
      <Nav>
        <InputGroup className="col-12 col-lg-6 mx-auto mb-4">
          <Form.Control
            className="border-dark mt-3"
            placeholder="Type to Search Books..."
            value={searchQuery}
            onChange={(event) => {
              setSearch(event.target.value);
            }}
          ></Form.Control>
        </InputGroup>
      </Nav>
      <Row className="mx-1 justify-content-center">
        <Col>
          <Row>
            {props.FantasyBooks.map((book) => {
              return (
                book.title.toLowerCase().includes(searchQuery) && (
                  <SingleBook
                    setAsin={props.booklistAsin}
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
};

export default BookList;
