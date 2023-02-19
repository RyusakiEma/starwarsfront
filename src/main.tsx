import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import ThemeComponent from "./common/theme/themeComponent";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThemeComponent>
      <App />
    </ThemeComponent>
  </React.StrictMode>
);
