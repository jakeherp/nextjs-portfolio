import React from "react";
import BaseLayout from "../components/layouts/BaseLayout";
import Typed from "react-typed";

import { Button, Container, Row, Col } from "reactstrap";

const Index = () => (
  <BaseLayout className="cover">
    <div className="main-section">
      <div className="background-image">
        <img src="/static/images/background-index.png" />
      </div>
      <Container>
        <Row>
          <Col md="6">
            <div className="hero-section">
              <div className={`flipper`}>
                <div className="back">
                  <div className="hero-section-content">
                    <h2> Full Stack Web Developer </h2>
                    <div className="hero-section-content-intro">
                      Have a look at my portfolio and job history.
                    </div>
                  </div>
                  <img className="image" src="/static/images/section-1.png" />
                  <div className="shadow-custom">
                    <div className="shadow-inner"> </div>
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col md="6" className="hero-welcome-wrapper">
            <Typed
              loop
              typeSpeed={80}
              backSpeed={20}
              strings={[
                "I'm <span class='accent'>Jacob</span> Herper",
                "I'm a web developer",
                "I'm a creative mind"
              ]}
              smartBackspace
              backDelay={1000}
              loopCount={0}
              showCursor
              cursorChar="|"
              className="typed"
            />
            <div className="hero-welcome-bio">
              <p>
                As a Web Developer, I love innovations and technologies right
                from childhood. I was opportune to learn HTML at age 12 and PHP
                at age 15, for this reason, I enjoy multi-tasking and getting to
                wear many hats.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  </BaseLayout>
);

export default Index;
