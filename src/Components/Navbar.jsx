import { Link } from "react-scroll";
import MobileNavbar from "./MobileNavbar";

export default function Navbar() {
  return (
    <div className="flex w-full items-center justify-between text-white fixed z-50 ">
      <div className="hidden navbar  items-center justify-between w-full p-10">
        {" "}
        <div className="flex items-center justify-center gap-16 w-full">
          <div className="flex items-end justify-center gap-1">
            <div className="text-4xl">Gilber</div>
            <div className="text-4xl text-red-700">.</div>
          </div>
          <div className="flex items-center justify-center gap-10 w-full">
            <div className="hover:text-red-500 duration-500 hover:cursor-pointer">
              <Link to="home" smooth={true}>
                HOME
              </Link>
            </div>
            <div className="hover:text-red-500 duration-500 hover:cursor-pointer">
              <Link to="about" smooth={true}>
                ABOUT
              </Link>
            </div>
            <div className="hover:text-red-500 duration-500 hover:cursor-pointer">
              <Link to="projects" smooth={true}>
                PROJECTS
              </Link>
            </div>
            <div className="hover:text-red-500 duration-500 hover:cursor-pointer">
              <Link to="education" smooth={true}>
                EDUCATION
              </Link>
            </div>
            <div className="hover:text-red-500 duration-500 hover:cursor-pointer">
              <Link to="testimonials" smooth={true}>
                TESTIMONIALS
              </Link>
            </div>
            <div className="hover:text-red-500 duration-500 hover:cursor-pointer">
              <Link to="partners" smooth={true}>
                PARTNERS
              </Link>
            </div>
            <div className="hover:text-red-500 duration-500 hover:cursor-pointer">
              <Link to="blog" smooth={true}>
                BLOG
              </Link>
            </div>
            <div className="hover:text-red-500 duration-500 bg-red-500 hover:cursor-pointer">
              <Link to="contact" smooth={true}>
                CONTACT
              </Link>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-end text-nowrap w-full">
          +7 (212) 674-25-10
        </div>
      </div>
      <div className="z-50 mobile-navbar">
        <MobileNavbar></MobileNavbar>
      </div>
    </div>
  );
}
