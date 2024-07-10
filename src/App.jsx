import LeftNav from "./Components/LeftNav";
import Navbar from "./Components/Navbar";
import About from "./Pages/About";
import Home from "./Pages/Home";
import Projects from "./Pages/Projects";
import Partners from "./Pages/Partners";
import Blog from "./Pages/Blog";
import Contact from "./Pages/Contact";

function App() {
  return (
    <>
      <div className="relative flex flex-col ">
        <div>
          <Navbar></Navbar>
        </div>
        <div>
          {" "}
          <LeftNav></LeftNav>
        </div>
        <div>
          <Home></Home>
        </div>
        <div>
          <About></About>
        </div>
        <div>
          <Projects></Projects>
        </div>
        <div>
          <Partners></Partners>{" "}
        </div>
        <div>
          <Blog></Blog>
        </div>
        <div>
          <Contact></Contact>
        </div>
      </div>
    </>
  );
}

export default App;
