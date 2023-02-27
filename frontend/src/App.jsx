import { Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import ItemInfoPage from "./pages/filminfopage/ItemInfoPage";
import "./App.css";
import Footer from "./components/footer/Footer";
import NotFound from "./pages/notfound/NotFound";
import ItemInfo from "./components/filminfo/ItemInfo";
import Maincontainer from "./components/maincontainer/Maincontainer";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Maincontainer />} />
        <Route path="ItemInfo" element={<ItemInfoPage />} />
        <Route path="ItemInfo/:id" element={<ItemInfo />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
