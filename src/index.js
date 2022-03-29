import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import {FavoritesContextProvider} from './store/favorites-context'

ReactDOM.render(
  <FavoritesContextProvider>
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
  </FavoritesContextProvider>,
  
  document.getElementById("root")
);
