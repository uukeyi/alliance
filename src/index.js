import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ModalProvider } from "./contexts/modalContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
   <React.StrictMode>
      <ModalProvider>
         <App />
      </ModalProvider>
   </React.StrictMode>
);

reportWebVitals();
