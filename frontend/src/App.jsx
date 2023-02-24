import { Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./pages/home/Home";
import ItemInfoPage from "./pages/filminfopage/ItemInfoPage";
import "./App.css";
import Footer from "./components/footer/Footer";
import Films from "./pages/Films";
import Series from "./pages/Series";
import NotFound from "./pages/notfound/NotFound";
import ItemInfo from "./components/filminfo/ItemInfo";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/films" element={<Films />} />
        <Route path="/series" element={<Series />} />
        <Route path="ItemInfo" element={<ItemInfoPage />} />
        <Route path="ItemInfo/:id" element={<ItemInfo />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
