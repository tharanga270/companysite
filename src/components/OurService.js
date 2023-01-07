import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import servicelogo1 from "../images/service-logo1.png";

function OurService() {
  return (
    <>
      <section className="our-service">
        <Container>
          <Row className="service-card-row">
            <Col md={3} sm={6} className="col-architecture col6-cmn">
              <Card className="service-card service-height-set">
                <Card.Img className="service-img-cmn" src={servicelogo1} />
                <Card.Body>
                  <Card.Title>
                    <h5>Architecture</h5>
                  </Card.Title>
                  <Card.Text>
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col md={3} sm={6} className="col6-cmn">
              <Card className="service-card service-height-set">
                <Card.Img className="service-img-cmn" src={servicelogo1} />
                <Card.Body>
                  <Card.Title>
                    <h5>Planning</h5>
                  </Card.Title>
                  <Card.Text>
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col md={3} sm={6} className="col6-cmn">
              <Card className="service-card service-height-set service-margin-set">
                <Card.Img className="service-img-cmn" src={servicelogo1} />
                <Card.Body>
                  <Card.Title>
                    <h5>Urban Design</h5>
                  </Card.Title>
                  <Card.Text>
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col md={3} sm={6} className="col6-cmn">
              <Card className="service-card service-height-set service-margin-set">
                <Card.Img className="service-img-cmn" src={servicelogo1} />
                <Card.Body>
                  <Card.Title>
                    <h5>Research</h5>
                  </Card.Title>
                  <Card.Text>
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          <Row className="aboutus-row">
            <Col md={6}>
              <p className="cmn-p-text">ABOUT US</p>
              <h1 className="cmn-p-text">
                We work at all scales and in all sectors.
              </h1>
              <p>
                We create transformative cultural, corporate, residential and
                other spaces that work in synchronicity with their surroundings.
              </p>
            </Col>

            <Col md={6}>
              <h4>The future of how we live, work and play</h4>
              <p className="pt-3 sample-p">
                Sample text. Click to select the text box. Click again or
                <br />
                double click to start editing the text.
              </p>
              <h4>Look toward the future</h4>
              <p className="pt-3 sample-p">
                Sample text. Click to select the text box. Click again or
                <br />
                double click to start editing the text.
              </p>
              <button>learn more</button>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default OurService;
