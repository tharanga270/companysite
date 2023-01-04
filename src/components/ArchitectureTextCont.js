import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function ArchitectureTextCont() {
  return (
    <>
      <section className="architecture-text-cont">
        <Container>
          <Row>
            <Col className="text-center">
              <h1>Architecture & Interior Design</h1>
              <p>
                Sample text. Click to select the text box. Click again or double
                click to start editing the text.
              </p>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default ArchitectureTextCont;
