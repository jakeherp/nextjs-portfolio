import React from "react";
import BaseLayout from "../components/layouts/BaseLayout";
import { withRouter } from "next/router";
import axios from "axios";
import Portfolio from "./portfolio";

class Work extends React.Component {
  static async getInitialProps({ query }) {
    const workId = query.id;
    let work = {};

    try {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/posts/${workId}`
      );
      work = response.data;
    } catch (err) {
      console.error(err);
    }

    return { work };
  }

  render() {
    const { work } = this.props;

    return (
      <BaseLayout>
        <h1>{work.title}</h1>
        <p>{work.body}</p>
      </BaseLayout>
    );
  }
}

export default withRouter(Work);
