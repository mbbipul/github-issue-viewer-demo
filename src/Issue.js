import classNames from "classnames";
import PropTypes from "prop-types";
import React, { Component } from "react";

import "./Issue.css";

export default class Issue extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    state: PropTypes.oneOf(["open", "closed"]).isRequired
  };

  render() {
    const { title, body, state } = this.props;

    // Conditionally apply classes based on state of the issue.
    const classes = classNames({
      Issue: true,
      "Issue--isOpen": state === "open",
      "Issue--isClosed": state === "closed"
    });

    return (
      <li className={classes}>
        <p>
          {title}
        </p>
        <p className="Issue--body">
          {body}
        </p>
      </li>
    );
  }
}
