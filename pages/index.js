import React from "react";
import BaseLayout from "../components/layouts/BaseLayout";
import Typed from "react-typed";
import LogoGithub from "react-ionicons/lib/LogoGithub";
import LogoLinkedin from "react-ionicons/lib/LogoLinkedin";
import LogoTwitter from "react-ionicons/lib/LogoTwitter";

import { Button, Container, Row, Col } from "reactstrap";

const Index = () => (
  <BaseLayout className="cover">
    <div className="main-section">
      <Container>
        <Row>
          <Col md="6">
            <img
              src="/static/images/jacob_herper.jpg"
              alt="Jacob Herper"
              className="photo"
            />
          </Col>
          <Col md="6" className="hero-welcome-wrapper">
            <Typed
              loop
              typeSpeed={80}
              backSpeed={20}
              strings={[
                "I'm <span class='accent'>Jacob</span> Herper.",
                "I'm a <span class='accent'>web developer</span>.",
                "I'm a <span class='accent'>creative</span> mind."
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
              <a
                href="https://github.com/jakeherp"
                target="_blank"
                className="icons">
                <LogoGithub fontSize="2rem" color="#fff" />
              </a>
              <a
                href="https://www.linkedin.com/in/jacobherper/"
                target="_blank"
                className="icons">
                <LogoLinkedin fontSize="2rem" color="#fff" />
              </a>
              <a
                href="https://twitter.com/jakeherp"
                target="_blank"
                className="icons">
                <LogoTwitter fontSize="2rem" color="#fff" />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  </BaseLayout>
);

export default Index;
