import React from "react";
import BaseLayout from "../components/layouts/BaseLayout";
import { Link } from "../routes";
import BasePage from "../components/BasePage";
import {
  Col,
  Row,
  Card,
  CardBody,
  CardHeader,
  CardText,
  CardTitle
} from "reactstrap";

import axios from "axios";
import { ReadStream } from "tty";

class Portfolio extends React.Component {
  static async getInitialProps() {
    let posts = [];

    try {
      const response = await axios.get(
        "https://www.behance.net/v2/users/jakeherp/projects/?api_key=Hvz37g2VCwNq7NLdPSdr4ITJOSN7QyAz"
      );
      posts = response.data.projects;
    } catch (err) {
      console.error(err);
    }

    return {
      posts: posts.splice(0, 9)
    };
  }

  renderPosts(posts) {
    return posts.map((post, index) => (
      <Col md="4" key={index}>
        <React.Fragment>
          <span>
            <Card className="portfolio-card">
              <CardHeader className="portfolio-card-header">
                {post.name}
              </CardHeader>
              <CardBody>
                <p className="portfolio-card-city"> Some Location {index} </p>
                <CardTitle className="portfolio-card-title">
                  Some Company {index}
                </CardTitle>
                <CardText className="portfolio-card-text">
                  Some Description {index}
                </CardText>
                <div className="readMore"> </div>
              </CardBody>
            </Card>
          </span>
        </React.Fragment>
      </Col>
    ));
  }

  render() {
    const { posts } = this.props;

    return (
      <BaseLayout>
        <BasePage title="Portfolio">
          <Row>{this.renderPosts(posts)}</Row>
        </BasePage>
      </BaseLayout>
    );
  }
}

export default Portfolio;
