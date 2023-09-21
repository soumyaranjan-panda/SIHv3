import { Toaster } from "react-hot-toast";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Main from "./components/Main"
import Features from "./components/Features";
import Testimonials from "./components/Testimonials";

function App() {
  return (
    <div >
      <Toaster />
      <Navbar />
      <Home />
      <Features/>
      <Main/>
      <Testimonials/>
      <Footer />
    </div>
  );
}

export default App;

//Navbar-Home-Features-Main-Testimonials-Footer

