import { Toaster } from "react-hot-toast";
import Home from "./components/home/Home";
import Navbar from "./components/Navbar/Navbar";
import Footerr from "./components/footer/Footerr";
import Main from "./components/main/Main"
import Features from "./components/features/Features";
import Rocket1 from "./components/rocket/Rocket1";
import Testimonials3 from "./components/testimonials/Testimonials3";

function App() {
  return (
    <div className="font-san">
      <Toaster />
      <Navbar />
      <Home />
      <Features/>
      <Main/>
      <Testimonials3/>
      <Rocket1/>
      <Footerr />
    </div>
  );
}

export default App;

//Navbar-Home-Features-Main-Testimonials-Footer
