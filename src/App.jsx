import LeftNav from "./Components/LeftNav";
import Navbar from "./Components/Navbar";
import About from "./Pages/About";
import Home from "./Pages/Home";
import Projects from "./Pages/Projects";
import Partners from "./Pages/Partners";
import Blog from "./Pages/Blog";
import Contact from "./Pages/Contact";
import Education from "./Pages/Education";
import Testimonials from "./Pages/Testimonials";

function App() {
  return (
    <div className=" overflow-hidden ">
      <Navbar></Navbar>

      <LeftNav></LeftNav>

      <Home></Home>

      <About></About>

      <Projects></Projects>

      <Education></Education>

      <Testimonials></Testimonials>

      <Partners></Partners>

      <Blog></Blog>

      <Contact></Contact>
    </div>
  );
}

export default App;
