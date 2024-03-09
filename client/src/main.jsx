import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Auth0Provider
     domain="dev-4u5o2o0hgacyud3d.us.auth0.com"
     clientId="TC2l1BG0kzYZ20Fo9pA6C095Lh78HxhQ"
     authorizationParams={{
      redirect_uri: "https://home-bugers.vercel.app"
     }}
     audience="https://find-perfect.vercel.app/api"
     scope="openid profile email"
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>
);
