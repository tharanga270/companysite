import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function Singup() {
  return (
    <>
      <section className="singup-section">
        <div className="singup-image-cont"></div>
        <Container className="cont-singup">
          <Row className="justify-content-center">
            <Col md={8} className="colsing-md8">
              <p className="singup-offer-title text-center">
                Sign Up for Exclusive Offers
              </p>
              <p className="text-center">
                Sample text. Click to select the text box. Click again or
              </p>
              <p className="text-center">
                double click to start editing the text.
              </p>

              <Form>
                <Form.Group className="mb-3" controlId="">
                  <Form.Control type="text" placeholder="Enter your name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="">
                  <Form.Control
                    type="email"
                    placeholder="Enter a valid email address"
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="">
                  <Form.Control type="text" placeholder="Telephone Number" />
                </Form.Group>

                <Form.Control
                  as="textarea"
                  placeholder="Leave a comment here"
                  style={{ height: "100px" }}
                />
                <div className="d-grid gap-2 mt-3">
                  <Button variant="primary" className="singup-button">
                    Sing Up
                  </Button>{" "}
                </div>
                <p className="text-center mt-4">
                  Image from{" "}
                  <a href="#" className="text-dark">
                    Freepik
                  </a>
                </p>
              </Form>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Singup;
