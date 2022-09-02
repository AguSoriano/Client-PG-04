import React from "react";
import ReactDOM from "react-dom/client";
import "antd/dist/antd.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store/index";
import { Auth0Provider } from "@auth0/auth0-react";

const domain = "dev-5l1d0mqd.us.auth0.com";
const clientId = "VtG1CJrcK6amXGS7PPP2aLiuKbBKlZDY";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <Auth0Provider
          domain={domain}
          clientId={clientId}
          redirectUri={window.location.origin} //esto lo retorna a donde estaba el usuario
        >
          <App />
        </Auth0Provider>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
