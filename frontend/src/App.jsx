import Navbar from "./components/navbar/Navbar";
import Header from "./components/header/Header";
import Cardfilmlist from "./components/cardfilmlist/Cardfilmlist";
import "./App.css";
import Filminfo from "./components/filminfo/Filminfo";

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <Filminfo />
      <Cardfilmlist />
    </div>
  );
}

export default App;
