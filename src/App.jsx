import LeftNav from "./Components/LeftNav";
import Navbar from "./Components/Navbar";
import About from "./Pages/About";
import Home from "./Pages/Home";
import Projects from "./Pages/Projects";
import Partners from "./Pages/Partners";

function App() {
  return (
    <>
      <div className="relative">
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
      </div>
    </>
  );
}

export default App;
