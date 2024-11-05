import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Footerr from "./components/Footerr";
import Main from "./components/Main";
import Features from "./components/Features";
import Rocket1 from "./components/utilities/rocket/Rocket1";
import Testimonials3 from "./components/Testimonials3";

function App() {
    return (
        <div className="font-san">
            <Navbar />
            <Home />
            <Features />
            <Main />
            <Testimonials3 />
            <Rocket1 />
            <Footerr />
        </div>
    );
}

export default App;

//Navbar-Home-Features-Main-Testimonials-Footer
