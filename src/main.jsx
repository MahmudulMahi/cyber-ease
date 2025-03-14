import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { RouterProvider } from "react-router-dom";
import { router } from "./Routes/Router.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div className="">
      {/* max-w-[1400px] mx-auto */}

      <RouterProvider router={router} />
    </div>
  </StrictMode>
);
