import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./redux/store.js";
import App from "./App.jsx";
import { RouterProvider } from "react-router-dom";
import router from "./Routes/Routes.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div className="max-w-7xl p-3 mx-auto">
      <Provider store={store}>
        {/* <App /> */}
        <RouterProvider router={router} />
      </Provider>
    </div>
  </StrictMode>
);

