import { useState } from "react";
import { MdArrowForwardIos } from "react-icons/md";
import { MdOutlineArrowBackIos } from "react-icons/md";
import slides from "../Constant/EducationSlides.jsx";
import { useEffect } from "react";

export default function Education() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sliderSlides, setSliderSlides] = useState([]);

  useEffect(() => {
    if (slides !== null) {
      setSliderSlides(slides);
    }
  }, [slides]);

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
    <div className="w-full h-screen relative flex items-center justify-center bg-[#161616] overflow-hidden">
      <div className=" absolute flex items-center justify-between w-full h-screen p-36">
        <div className="text-white cursor-pointer z-40" onClick={handlePrev}>
          <MdOutlineArrowBackIos className="size-10 z-30" />
        </div>
        <div className="text-white cursor-pointer" onClick={handleNext}>
          <MdArrowForwardIos className="size-10" />
        </div>
      </div>
      <div className="flex flex-col items-center justify-between w-full h-screen text-xl text-white p-20 gap-5">
        <div className="flex items-center justify-between w-full px-20">
          <div className="text-6xl px-10">Education</div>
          <div>
            <button className="bg-red-500 p-3 px-4">DOWNLOAD RESUME</button>
          </div>
        </div>
        <div className="relative w-full h-full flex ">
          {sliderSlides.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute w-full h-full transition-transform duration-500  ${
                index === currentSlide ? "translate-x-0" : "translate-x-full"
              } ${
                index === (currentSlide + slides.length - 1) % slides.length
                  ? "translate-x-[-100%]"
                  : ""
              }`}
            >
              {slide.content}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
