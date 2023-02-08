import Cardfilmlist from "./components/cardfilmlist/Cardfilmlist";
import "./App.css";
import Filminfo from "./components/filminfo/Filminfo";

function App() {
  return (
    <div className="App">
      <Filminfo />
      <Cardfilmlist />
    </div>
  );
}

export default App;
