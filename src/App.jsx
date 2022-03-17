import "./App.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import Header from "./components/Header";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
    </div>
  );
}

export default App;
