import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CategoriesList from "./components/categories/CategoriesList";
import Navbar from "./components/navbar/Navbar";
import Header from "./components/header/Header";
import Cardfilmlist from "./components/cardfilmlist/Cardfilmlist";
import "./App.css";
import Footer from "./components/footer/Footer";
// import Filminfo from "./components/filminfo/Filminfo";
import Carousel from "./components/carousel/Carousel";
import Films from "./pages/Films";
import Series from "./pages/Series";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Navbar />
        <Carousel />
        <CategoriesList />
        {/* <Filminfo /> */}
        <Cardfilmlist />
      </div>
      <Routes>
        <Route path="/films" element={<Films />} />
        <Route path="/series" element={<Series />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
