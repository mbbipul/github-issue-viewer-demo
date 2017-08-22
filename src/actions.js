import request from "superagent";

export function fetchIssues(issueState) {
  return function(dispatch) {
    dispatch({
      type: "FETCH_ISSUES_REQUEST"
    });

    request
      .get("https://api.github.com/repos/facebook/react/issues")
      .query({ state: issueState })
      // Get the response
      .end((err, res) => {
        // Set the response body to the issues state
        if (err) {
          dispatch({
            type: "FETCH_ISSUES_FAILED",
            err
          });
          return;
        }

        dispatch({
          type: "FETCH_ISSUES_SUCCEEDED",
          issues: res.body
        });
      });
  };
}

export function toggleIssueState(issueState) {
  return {
    type: "ISSUE_STATE_TOGGLED",
    issueState
  };
}
