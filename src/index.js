// Bridging file for html and css 
import ReactDom from "react-dom";
import { App } from "./App";

const appElement = document.getElementById("app")
ReactDom.render(<App />, appElement)