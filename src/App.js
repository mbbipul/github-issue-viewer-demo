import Button from "@twitter/feather-component-button-react";
import connect from "./connect";
import Issue from "./Issue";
import PageHeader from "@twitter/feather-component-page-header-react";
import PropTypes from "prop-types";
import React, { Component } from "react";

import "@twitter/feather/dist/css/feather.css";

class App extends Component {
  static propTypes = {
    issues: PropTypes.array.isRequired,
    issueState: PropTypes.oneOf(["open", "closed", "all"]).isRequired,
    fetchIssues: PropTypes.func.isRequired,
    toggleIssueState: PropTypes.func.isRequired
  };

  componentDidMount() {
    this.props.fetchIssues(this.props.issueState);
  }

  _handleButtonClick = issueState => {
    this.props.toggleIssueState(issueState);
  };

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <PageHeader
            endChildren={
              <div>
                <IssueStateButton
                  issueState="all"
                  onToggle={this._handleButtonClick}
                >
                  All
                </IssueStateButton>
                <IssueStateButton
                  appearance="primary"
                  issueState="open"
                  onToggle={this._handleButtonClick}
                >
                  Open
                </IssueStateButton>
                <IssueStateButton
                  appearance="danger"
                  issueState="closed"
                  onToggle={this._handleButtonClick}
                >
                  Closed
                </IssueStateButton>
              </div>
            }
          >
            Github Issue Viewer
          </PageHeader>
        </div>
        <ul>
          {this.props.issues.map((issue, index) => {
            return (
              <Issue
                key={index}
                title={issue.title}
                body={issue.body}
                state={issue.state}
              />
            );
          })}
        </ul>
      </div>
    );
  }
}

// We can make an internal component private by declaring
// it in inside another module, but not exporting it.
class IssueStateButton extends Component {
  static propTypes = {
    appearance: PropTypes.string,
    children: PropTypes.node,
    issueState: PropTypes.oneOf(["open", "closed", "all"]),
    onToggle: PropTypes.func
  };

  _handleClick = e => {
    e.preventDefault();
    const { issueState, onToggle } = this.props;

    onToggle(issueState);
  };

  render() {
    const { children, appearance } = this.props;

    return (
      <Button onClick={this._handleClick} appearance={appearance}>
        {children}
      </Button>
    );
  }
}

export default connect(App);
