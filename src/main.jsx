import React from "react";
import ReactDOM from "react-dom/client";
import "leaflet/dist/leaflet.css";
import "./index.css";
import ContactPage from "./components/ContactPage";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ContactPage />
  </React.StrictMode>
);
