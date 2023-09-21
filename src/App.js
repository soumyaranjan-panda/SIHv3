import { Toaster } from "react-hot-toast";
import Home from "./components/home/Home";
import Navbar from "./components/Navbar/Navbar";
import Footerr from "./components/footer/Footerr";
import Main from "./components/main/Main"
import Features from "./components/features/Features";
import Testimonials from "./components/testimonials/Testimonials";
import Testimonials2 from "./components/testimonials/Testimonials2";

function App() {
  return (
    <div >
      <Toaster />
      <Navbar />
      <Home />
      <Features/>
      <Main/>
      <Testimonials2/>
      <Footerr />
    </div>
  );
}

export default App;

//Navbar-Home-Features-Main-Testimonials-Footer
