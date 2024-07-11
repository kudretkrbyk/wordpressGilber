import { Link } from "react-scroll";
import { RiCloseLargeFill } from "react-icons/ri";
import { GiHamburgerMenu } from "react-icons/gi";

export default function MobileNavbar() {
  return (
    <div className="  w-full  h-screen items-center justify-center p-10 text-white fixed z-50 bg-[#161616] ">
      <div>
        <GiHamburgerMenu />
      </div>

      <div className="flex flex-col items-center justify-center">
        <div className="z-50 flex items-center justify-end w-full">
          <RiCloseLargeFill className="size-10" />
        </div>

        <div className="z-50 flex items-center justify-center gap-16 w-full">
          <div className="flex  flex-col items-center justify-center gap-10 w-full">
            <div className="flex items-end justify-center gap-1">
              <div className="text-4xl">Gilber </div>
              <div className="text-4xl text-red-700">.</div>
            </div>
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
            <div>+7 (212) 674-25-10</div>
          </div>
        </div>
      </div>
    </div>
  );
}
