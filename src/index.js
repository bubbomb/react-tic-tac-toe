import "./index.css";

import Board from "./Board";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

const container = document.getElementById("app");
const root = createRoot(container);
root.render(
  <StrictMode>
    <Board />
  </StrictMode>
);
