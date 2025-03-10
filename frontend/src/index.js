import React from "react";
import ReactDOM from "react-dom/client";
import "react-quill/dist/quill.snow.css";
import "jsvectormap/dist/css/jsvectormap.css";
import "react-toastify/dist/ReactToastify.css";
import "react-modal-video/css/modal-video.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ToastContainer } from "react-toastify";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./app/store";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
    <ToastContainer />
  </>
);

reportWebVitals();
