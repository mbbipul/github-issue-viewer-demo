import { applyMiddleware, createStore } from "redux";
import { Provider } from "react-redux";
import App from "./App";
import logger from "redux-logger";
import React from "react";
import ReactDOM from "react-dom";
import reducer from "./reducer";
import registerServiceWorker from "./registerServiceWorker";
import thunk from "redux-thunk";

import "./index.css";

// In production, we would probably want to filter out the logger.
// i.e. if (process.env.NODE_ENV !== 'production') {
//  middleware = [thunk, logger]
// } else {
//  middleware = [thunk]
// }

const middleware = [logger, thunk];

const store = createStore(reducer, applyMiddleware(...middleware));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
