import React from "react";
import ReactDOM from "react-dom/client";
const parent = React.createElement("div", { id: "parent" }, React.createElement("div", { id: "child" }, [React.createElement("h1", {}, "I'm in h1 tag!"), React.createElement("h2", {}, "I'm in h2 tag!")]));
const heading = React.createElement("h1", { id: "heading" }, "Hello World from React!");
const root = ReactDOM.createRoot(document.getElementById("root"));
const root2 = ReactDOM.createRoot(document.getElementById("root2"));
root.render(parent);
root2.render(heading);