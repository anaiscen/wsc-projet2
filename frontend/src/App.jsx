import CategoriesList from "./components/categories/CategoriesList";
import Navbar from "./components/navbar/Navbar";
import Header from "./components/header/Header";
import Cardfilmlist from "./components/cardfilmlist/Cardfilmlist";
import "./App.css";
import Footer from "./components/footer/Footer";
import Filminfo from "./components/filminfo/Filminfo";
import Carousel from "./components/carousel/Carousel";

function App() {
  return (
    <div className="App">
      <Carousel />
      <CategoriesList />
      <Footer />
      <Header />
      <Navbar />
      <Filminfo />
      <Cardfilmlist />
    </div>
  );
}

export default App;
