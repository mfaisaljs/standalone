"use strict";
import ReactDOM from "react-dom/client";
import Main from "./Main.js";
import { GlobalProvider } from "../src/context/global.js";
function App(props) {
  return (
    <GlobalProvider>
      <Main />
    </GlobalProvider>
  );
}

const container = document.querySelector("#root");
const root = ReactDOM.createRoot(container);

root.render(<App />);
