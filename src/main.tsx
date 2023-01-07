import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "@mui/material/styles";
import App from "./App";
import "./main.css";
import { MuiTheme } from "./global";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={MuiTheme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
