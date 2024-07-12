import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { FronteggProvider } from "@frontegg/react";

const contextOptions = {
  baseUrl: "https://app-l0pb2ub4f45m.frontegg.com",
  clientId: "11e5745f-ead5-430f-b4f7-9c92661f85ff",
};

const authOptions = {
  keepSessionAlive: true, // Uncomment this in order to maintain the session alive
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <FronteggProvider
    contextOptions={contextOptions}
    hostedLoginBox={true}
    authOptions={authOptions}
  >
    <App />
  </FronteggProvider>,
  document.getElementById("root")
);
