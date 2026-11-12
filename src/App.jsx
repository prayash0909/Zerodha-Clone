import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Sections from "./components/Sections";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Sections />
      </main>
      <Footer />
    </>
  );
}

export default App;
