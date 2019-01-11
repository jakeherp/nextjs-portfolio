import React from "react";
import Link from "next/link";

import "../../styles/style.scss";

class Header extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/about/">
          <a>About</a>
        </Link>
        <Link href="/portfolio/">
          <a>Portfolio</a>
        </Link>
        <Link href="/cv/">
          <a>CV</a>
        </Link>
        <Link href="/contact/">
          <a>Contact</a>
        </Link>
      </React.Fragment>
    );
  }
}

export default Header;
