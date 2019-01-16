import React from "react";
import BaseLayout from "../components/layouts/BaseLayout";
import BasePage from "../components/BasePage";
import {
  Col,
  Row,
  Progress,
  Badge,
  Card,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle
} from "reactstrap";

const Skill = props => {
  const { title, value } = props;

  return (
    <Col sm={4}>
      <div className="text-center">{title}</div>
      <Progress value={value} />
    </Col>
  );
};

const Language = props => {
  const { title, value } = props;

  return (
    <Col sm={12}>
      <div className="text-center">{title}</div>
      <Progress value={value} />
    </Col>
  );
};

const SoftSkill = props => {
  const title = props.title;

  return (
    <Badge color="primary" className="softskill">
      {title}
    </Badge>
  );
};

const WorkExperience = props => {
  const { role, company, url, startDate, endDate, location } = props;

  return (
    <Card className="work-experience">
      <CardBody>
        <CardTitle>{role}</CardTitle>
        <CardSubtitle>
          <a href={url} target="_blank">
            {company}
          </a>{" "}
          – {location}
        </CardSubtitle>
        <CardSubtitle>
          <em>
            {startDate} to {endDate}
          </em>
        </CardSubtitle>
        <CardText>{props.children}</CardText>
      </CardBody>
    </Card>
  );
};

const Education = props => {
  const { institute, startDate, endDate } = props;

  return (
    <Card className="work-experience">
      <CardBody>
        <CardTitle>{institute}</CardTitle>
        <CardSubtitle>
          <em>
            {startDate} to {endDate}
          </em>
        </CardSubtitle>
        <CardText>{props.children}</CardText>
      </CardBody>
    </Card>
  );
};

const Cv = () => (
  <BaseLayout>
    <BasePage title="CV" className="cv-page">
      <p>
        The advancement of technology today is amazing and has helped improve
        our society.
      </p>
      <p>
        Having a website that expresses the cohesive brand of your business
        makes it easier for visitors (potential customers) to navigate,
        understand and have a better experience visiting your website.{" "}
      </p>
      <p>
        As a Web Developer, I love innovations and technologies right from
        childhood. I was opportune to learn HTML at age 12 and PHP at age 15,
        for this reason, I enjoy multi-tasking and getting to wear many hats.
        These have made me gain a lot of experience, having worked with
        companies like ASA GmbH, Creativ Agency Ltd, and The Specialist Works as
        a front-end developer. A Graphic Designer with over 10 years
        professional experience who have worked with Porsche Design should be
        the perfect fit for your products. Over the years, I have founded and
        co-founded Six companies. Having worked with a number of professionals
        around the globe, I eventually turned out to be a bilingual enthusiast
        speaking both English and German. Also, I can communicate in Russian and
        Italian while learning Spanish presently.
      </p>
      <Row>
        <Col sm={12} md="8">
          <h2>Professional Skills</h2>
          <Row>
            <Skill title="HTML5" value="95" />
            <Skill title="CSS" value="95" />
            <Skill title="Sass" value="90" />
            <Skill title="JavaScript" value="65" />
            <Skill title="React" value="55" />
            <Skill title="Vue.js" value="30" />
            <Skill title="Node.js" value="40" />
            <Skill title="Express.js" value="40" />
            <Skill title="Next.js" value="50" />
            <Skill title="Git" value="85" />
            <Skill title="Gulp" value="80" />
            <Skill title="Scrum" value="80" />
            <Skill title="PHP" value="60" />
            <Skill title="Laravel" value="40" />
            <Skill title="WordPress" value="95" />
          </Row>
        </Col>
        <Col sm={12} md="4">
          <h2>Soft Skills</h2>
          <Row>
            <Col>
              <SoftSkill title="Strong communication skills" />
              <SoftSkill title="Leadership Skills" />
              <SoftSkill title="Problem Solving" />
              <SoftSkill title="Flexible and adaptable" />
              <SoftSkill title="Wide array of skills" />
              <SoftSkill title="Teamwork" />
              <SoftSkill title="Always on time" />
            </Col>
          </Row>
          <h2>Languages</h2>
          <Row>
            <Language title="English" value="100" />
            <Language title="German" value="100" />
            <Language title="Spanish" value="40" />
            <Language title="Italian" value="20" />
            <Language title="Russian" value="20" />
          </Row>
        </Col>
      </Row>
      <Row>
        <Col>
          <h2>Work Experience</h2>
          <WorkExperience
            role="Frontend Developer"
            company="The Specialist Works"
            url="https://www.thespecialistworks.com/"
            startDate="Dec 2017"
            endDate="Jan 2019"
            location="London, UK">
            TSW originally hired me on a 6-month-contract, which was then
            changed to a permanent role. I developed three WordPress websites
            and managed their web servers and domains. In addition I designed
            and maintained 2 apps on Android and iOS platforms. The primary
            website I designed and developed is thespecialistworks.com, which is
            based on the _s framework. The technology stack used was PHP 7 for
            the theme development and HTML 5, CSS3 and JavaScript (with some
            jQuery) in the frontend.
          </WorkExperience>
          <WorkExperience
            role="Founder &amp; Full Stack Developer"
            company="Creativ Agency Ltd"
            url="https://creativ.agency/"
            startDate="Feb 2017"
            endDate="present"
            location="London, UK">
            Creativ Agency is my company under which I have been doing freelance
            work for the past 2 years, working with agencies and small companies
            across different countries. The technologies I have worked with over
            the years are PHP (including Laravel framework), HTML5, CSS / Sass,
            JavaScript (including React / Vue.js / Node.JS), Git and WordPress.
          </WorkExperience>
          <WorkExperience
            role="Co Founder &amp; CTO"
            company="Immovato GmbH"
            url="https://www.immovato.com/"
            startDate="Apr 2014"
            endDate="Aug 2017"
            location="Wiesbaden, Germany">
            With Immovato we found a way to revolutionise the real estate sector
            in Germany. As the co founder of this company I have supervised
            Immovato from the first concept sketches to launch of a MVP and
            beyond. My role as Immovato’s Chief Technology Officer was the
            coordination of freelance web developers and designers as well as
            employing new members of staff in the IT department. Furthermore I
            developed the primary marketing strategy, corporate design and the
            user interface of the website. I have left the company in 2017 to
            concentrate on my career and life in the UK.
          </WorkExperience>
          <WorkExperience
            role="Creative Director"
            company="ASA GmbH"
            url="https://www.asa-europe.com/"
            startDate="Sep 2011"
            endDate="Nov 2014"
            location="Wiesbaden, Germany">
            As the Creative Director for ASA GmbH I was able to gain experience
            in a corporate environment. My main tasks included design and
            production of packaging and marketing material, as well as the setup
            and maintenance of 3 e-commerce systems and 50+ websites using
            primarily HTML5, CSS3, PHP and some JavaScript.
          </WorkExperience>
        </Col>
      </Row>
      <Row>
        <Col>
          <h2>Education</h2>
          <Education
            institute="Treehouse Online Academy"
            startDate="2014"
            endDate="present">
            Rank 26 / 376,834 students
            <ul>
              <li>Web Design</li>
              <li>WordPress Development</li>
              <li>PHP Development</li>
              <li>Front End Development</li>
              <li>Full Stack JavaScript</li>
              <li>React Development</li>
            </ul>
          </Education>
          <Education
            institute="Udemy Online Academy"
            startDate="2017"
            endDate="present">
            <ul>
              <li>Advanced JavaScript</li>
              <li>React 16.6</li>
              <li>Next.js</li>
              <li>Progressive Web Apps</li>
            </ul>
          </Education>
        </Col>
      </Row>
    </BasePage>
  </BaseLayout>
);

export default Cv;
