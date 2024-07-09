import LeftNav from "./Components/LeftNav";
import Navbar from "./Components/Navbar";
import About from "./Pages/About";
import Home from "./Pages/Home";

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
      </div>
    </>
  );
}

export default App;
