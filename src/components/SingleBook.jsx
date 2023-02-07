import { Card, Col } from "react-bootstrap";
import { Component } from "react";

class SingleBook extends Component {
  state = { selected: false };
  render() {
    return (
      <>
        <Col lg={4} md={6} sm={12}>
          <Card
            onClick={() => {
              this.props.setAsin(this.props.singleBook.asin);
              if (this.state.selected) {
                this.setState({
                  selected: false,
                });
              } else {
                this.setState({
                  selected: true,
                });
              }
            }}
            className={this.state.selected ? "card-fix" : "card-fix"}
          >
            <Card.Img
              variant="top"
              src={this.props.singleBook.img}
              className="image-fix"
            />
            <p>{this.props.singleBook.title}</p>
            <p>
              {this.props.singleBook.category} | {this.props.singleBook.price}€
            </p>
          </Card>
        </Col>
      </>
    );
  }
}

export default SingleBook;
