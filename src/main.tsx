import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./styles/global.scss";
import { ProductProvider } from "./context/productContext.tsx";
import { MinicartProvider } from "./context/minicarContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <MinicartProvider>
    <ProductProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </ProductProvider>
  </MinicartProvider>
);
