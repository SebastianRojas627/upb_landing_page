import NavBar from "./components/NavBar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import OurServices from "./components/OurServices.jsx";
import Footer from "./components/Footer";
import Tours from "./components/Tours";
import "./App.css";

function App() {
  return (
    <>
      <NavBar></NavBar>
      <Hero></Hero>
      <About></About>
      <OurServices></OurServices>
      <Tours></Tours>
      <Footer></Footer>
      <script src="./js/app.js"></script>
    </>
  );
}

export default App;
