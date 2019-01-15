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
      const url = process.browser
        ? "/api/user-profile"
        : "http://localhost:3000/api/user-profile";
      const response = await axios.get(url);
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
              <CardBody>
                <img src={post.covers.max_808} alt={post.name} width="100%" />
                <CardTitle className="portfolio-card-title">
                  {post.name}
                </CardTitle>
                <CardText className="portfolio-card-text">
                  {post.fields[0]}
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