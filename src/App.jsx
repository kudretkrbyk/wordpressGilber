import LeftNav from "./Components/LeftNav";
import Navbar from "./Components/Navbar";
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
      </div>
    </>
  );
}

export default App;
