"use strict";
import ReactDOM from "react-dom/client";
import Main from "./Main.js";

function App(props) {
  return <Main />;
}

const container = document.querySelector("#root");
const root = ReactDOM.createRoot(container);

root.render(<App />);
