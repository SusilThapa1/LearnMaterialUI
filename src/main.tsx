import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { Provider } from "react-redux";
import { store } from "./Redux/store.ts";
import ReduxHydrateProvider from "./components/ReduxHydrateProvider.tsx";
import { BrowserRouter } from "react-router-dom";
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <ReduxHydrateProvider>
          <App />
        </ReduxHydrateProvider>
      </Provider>
    </BrowserRouter>
  </StrictMode>
);
