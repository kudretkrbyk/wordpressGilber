import { MdArrowForwardIos } from "react-icons/md";
import { MdOutlineArrowBackIos } from "react-icons/md";
import slides from "../Constant/TestimonialsSlides.jsx";
import { useEffect, useState } from "react";

export default function Testimonials() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sliderSlides, setSliderSlides] = useState([]);

  useEffect(() => {
    if (slides !== null) {
      setSliderSlides(slides);
    }
  }, []);

  const handleNext = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === slides.length - 1 ? 0 : prevSlide + 1
    );
  };

  const handlePrev = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? slides.length - 1 : prevSlide - 1
    );
  };

  return (
    <div className="w-full h-screen relative flex items-center justify-center p-20">
      <div className="absolute bg-center bg-cover w-full h-screen bg-[url('http://paul-themes.com/wordpress/gilber/wp-content/uploads/2020/12/testimonials.jpg')]"></div>
      <div className="w-full h-full flex items-end justify-between p-20 z-50">
        <div className="w-1/2 h-full flex flex-col items-start justify-between">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="#ef4444"
            viewBox="0 0 75 75"
            style={{ height: "75px" }}
          >
            <defs></defs>
            <path
              fill="#ef4444"
              d="M25 0C16.9271 0 10.7422 2.14844 6.44531 6.44531 2.14844 10.7422 0 16.9271 0 25v50h31.25V25H12.5c0-4.4271.9766-7.6172 2.9297-9.5703C17.3828 13.4766 20.5729 12.5 25 12.5V0zm43.75 0c-8.0729 0-14.2578 2.14844-18.5547 6.44531C45.8984 10.7422 43.75 16.9271 43.75 25v50H75V25H56.25c0-4.4271.9766-7.6172 2.9297-9.5703C61.1328 13.4766 64.3229 12.5 68.75 12.5V0z"
            ></path>
          </svg>
          <div className="text-2xl text-white w-full mt-4">
            Creative & dedicated is things that gilber studio brings for your
            business.
          </div>
        </div>
        <div className="text-white flex flex-col gap-10 w-1/2 h-full relative overflow-hidden ">
          {sliderSlides.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute  p-10 left-0 w-full h-full transition-transform duration-500 ${
                index === currentSlide
                  ? "translate-x-0"
                  : index < currentSlide
                  ? "-translate-x-full"
                  : "translate-x-full"
              }`}
            >
              {slide.content}
            </div>
          ))}
          <div className="absolute bottom-0 z-50 flex items-center justify-start w-full gap-10 p-10">
            <div
              className="text-white cursor-pointer border border-white p-2"
              onClick={handlePrev}
            >
              <MdOutlineArrowBackIos className="size-10" />
            </div>
            <div
              className="text-white cursor-pointer border border-white p-2"
              onClick={handleNext}
            >
              <MdArrowForwardIos className="size-10" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
