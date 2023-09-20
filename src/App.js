import { Toaster } from "react-hot-toast";
import Home from "./components/home/Home";
import Navbar from "./components/Navbar/Navbar";
import Footerr from "./components/footer/Footerr";

import Main from "./components/main/Main"
import Features from "./components/features/Features";
import Testimonials from "./components/testimonials/Testimonials";

function App() {
  return (
    <div >
      <Toaster />
      <Navbar />
      <Home />
      <Features/>
      <Main/>
      <Testimonials/>
      <Footerr />
    </div>
  );
}

export default App;

//Navbar-Home-Features-Main-Testimonials-Footer
