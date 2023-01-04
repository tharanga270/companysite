import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import aboutcompanyImage from "../images/about-company-1.jpg";

function AboutCompany() {
  return (
    <>
      <section className="about-company">
        <Container fluid>
          <Row>
            <Col md={5} className="colm5">
              <div className="position-relative">
                <img src={aboutcompanyImage} alt="aboutcompanyImage" />
              </div>
            </Col>
            <Col md={7} className="colm7">
              <Row>
                <Col md={2}></Col>
                <Col md={10}>
                  <div className="cmn-company-content">
                    <h1>About Company</h1>
                    <p>
                      Ut enim ad minim veniam, quis nostrud exercitation ullamco
                      laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                      irure dolor in reprehenderit in voluptate velit esse
                      cillum dolore eu fugiat nulla pariatur. Excepteur sint
                      occaecat cupidatat non proident.
                    </p>
                    <p>
                      Image from{" "}
                      <a href="" className="text-dark">
                        Freepik
                      </a>
                    </p>
                    <button class="cmn-btns">read more</button>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default AboutCompany;

/* <section class="about-company">
    <div class="container-fluid">
        <div class="row">
            <div class="col-md-5 colm5">
                <div class="position-relative">
                    <img src="images/about-company-1.jpg" alt="">
                </div>
            </div>
            <div class="col-md-7 colm7">
                <div class="row">
                    <div class="col-md-2">

                    </div>
                    <div class="col-md-10">
                        <div class="cmn-company-content">
                            <h1>About Company</h1>
                            <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                                dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
                            </p>
                            <p>Image from <a href="#" class="text-dark">Freepik</a></p>
                            <button class="cmn-btns">read more</button>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    </div>
</section> */
