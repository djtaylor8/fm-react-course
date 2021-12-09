import React from "react";
import ReactDOM from "react-dom";
import Pet from "./Pet";

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", { id: "my-brand" }, "Adopt Me!"),
    React.createElement(Pet, {
      name: "Lou",
      animal: "Cat",
      breed: "MegaChonk",
    }),
    React.createElement(Pet, {
      name: "Georgia",
      animal: "Cat",
      breed: "BestCat",
    }),
    React.createElement(Pet, { name: "Sudo", animal: "Dog", breed: "Terrier" }),
  ]);
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
