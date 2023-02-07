import { Card, Col } from "react-bootstrap";

import { useState } from "react";

const SingleBook = (props) => {
  const [selected, setState] = useState(false);

  return (
    <>
      <Col lg={4} md={6} sm={12}>
        <Card
          onClick={() => {
            props.setAsin(props.singleBook.asin);
            if (selected) {
              setState({
                selected: false,
              });
            } else {
              setState({
                selected: true,
              });
            }
          }}
          className={selected ? "card-fix" : "card-fix"}
        >
          <Card.Img
            variant="top"
            src={props.singleBook.img}
            className="image-fix"
          />
          <p>{props.singleBook.title}</p>
          <p>
            {props.singleBook.category} | {props.singleBook.price}€
          </p>
        </Card>
      </Col>
    </>
  );
};

export default SingleBook;
