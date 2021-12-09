import ReactDOM from "react-dom";
import Pet from "./Pet";

const App = () => {
  return (
    <div>
      <h1>Adopt Me!</h1>
      <Pet name="Lou" animal="Cat" breed="MegaChonk" />
      <Pet name="Georgia" animal="Cat" breed="Siamese" />
      <Pet name="Jackson" animal="Dog" breed="Labradoodle" />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
