import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./components/Redux/reducers/rootReducer";
import { getAllTickets } from "./components/Redux/actions/ticketActions";
import { BrowserRouter } from "react-router-dom";
import GetRoutes from "./GetRoutes";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
const store = createStore(rootReducer, applyMiddleware(thunk));
//get initial data
store.dispatch(getAllTickets());

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <GetRoutes />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

export default store;
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
