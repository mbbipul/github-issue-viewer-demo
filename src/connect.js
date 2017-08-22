import { connect } from "react-redux";
import { fetchIssues, toggleIssueState } from "./actions";

// Pull properties off of state object and pass them as props to App.
const mapStateToProps = state => ({
  issues: state.issues,
  issueState: state.issueState
});

// Dispatch actions for different event handlers on App component.
const mapDispatchToProps = dispatch => ({
  fetchIssues: function(issueState) {
    dispatch(fetchIssues(issueState));
  },
  toggleIssueState: function(issueState) {
    dispatch(toggleIssueState(issueState));
    dispatch(fetchIssues(issueState));
  }
});

export default connect(mapStateToProps, mapDispatchToProps);
