import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { TypeWriterProvider } from "./context/TypeWriterContext";
import { ThemeContextProvider } from "./context/ThemeContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeContextProvider>
        <TypeWriterProvider>
          <ToastContainer />
          <App />
        </TypeWriterProvider>
      </ThemeContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
