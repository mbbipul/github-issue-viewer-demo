const DEFAULT_STATE = {
  issues: [],
  issueState: "all",
  loading: false,
  error: null
};

export default function(state = DEFAULT_STATE, action) {
  const { type } = action;

  switch (type) {
    case "FETCH_ISSUES_REQUEST":
      return {
        ...state,
        loading: true
      };

    case "FETCH_ISSUES_SUCCEEDED":
      return {
        ...state,
        issues: action.issues,
        loading: false
      };

    case "FETCH_ISSUES_FAILED":
      return {
        ...state,
        loading: false,
        error: action.err
      };

    case "ISSUE_STATE_TOGGLED":
      return {
        ...state,
        issueState: action.issueState
      };

    default:
      return state;
  }
}
