import React from "react";
import BaseLayout from "../components/layouts/BaseLayout";
import BasePage from "../components/BasePage";
import { withRouter } from "next/router";
import axios from "axios";
import Portfolio from "./portfolio";

class Work extends React.Component {
  static async getInitialProps() {
    let posts = [];
    try {
      const url = process.browser
        ? `/api/portfolio-item/${posts.id}`
        : `http://localhost:3000/api/portfolio-item/${posts.id}`;
      const response = await axios.get(url);
      posts = response.data.projects;
    } catch (err) {
      console.error(err);
    }

    return {
      posts: posts.splice(0, 9)
    };
  }

  render() {
    const { posts } = this.props;

    return (
      <BaseLayout>
        <BasePage title={posts.id}>
          <p>A work item</p>
        </BasePage>
      </BaseLayout>
    );
  }
}

export default withRouter(Work);
