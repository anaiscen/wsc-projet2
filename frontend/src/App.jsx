import Navbar from "./components/navbar/Navbar";
import Header from "./components/header/Header";
import "./App.css";
import Footer from "./components/footer/Footer";
// import Filminfo from "./components/filminfo/Filminfo";
import Carousel from "./components/carousel/Carousel";
import Maincontainer from "./components/maincontainer/Maincontainer";

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <Carousel />
      {/* <Filminfo /> */}
      <Maincontainer />
      <Footer />
    </div>
  );
}

export default App;
