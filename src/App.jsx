import { createElement } from "react";
import { createRoot } from "react-dom"

const App = () => {
  return createElement("h1", {}, "this is a test")
}

const container = document.getElementById("root")
const root = createRoot(container)
root.render(createElement(App))
