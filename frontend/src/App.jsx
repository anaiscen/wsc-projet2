import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Header from "./components/header/Header";
import Home from "./pages/home/Home";
import FilmInfoPage from "./pages/filminfopage/FilmInfoPage";
import "./App.css";
import Footer from "./components/footer/Footer";
import Films from "./pages/Films";
import Series from "./pages/Series";
import NotFound from "./pages/notfound/NotFound";
import Filminfo from "./components/filminfo/Filminfo";

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/films" element={<Films />} />
        <Route path="/series" element={<Series />} />
        <Route path="filminfo" element={<FilmInfoPage />} />
        <Route path="filminfo/:id" element={<Filminfo />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
