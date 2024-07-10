import { useState } from "react";
import { MdArrowForwardIos } from "react-icons/md";
import { MdOutlineArrowBackIos } from "react-icons/md";
import slides from "../Constant/ProjectSlides.jsx";

export default function Projects() {
  const [currentSlide, setCurrentSlide] = useState(0);

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
    <div className="w-full h-screen relative overflow-hidden">
      <div className="z-50 absolute flex items-center justify-between w-full h-screen p-36">
        <div className="text-white cursor-pointer" onClick={handlePrev}>
          <MdOutlineArrowBackIos className="size-10" />
        </div>
        <div className="text-white cursor-pointer" onClick={handleNext}>
          <MdArrowForwardIos className="size-10" />
        </div>
      </div>

      {slides.map((slide, index) => (
        <div className="w-full  relative" key={slide.id}>
          {" "}
          <div
            className={`absolute bg-cover bg-center w-full h-screen transition-transform duration-[1500ms]  ${
              index === currentSlide
                ? "opacity-100 scale-100"
                : "opacity-0 scale-125"
            }`}
            style={{ backgroundImage: slide.backgroundImage }}
          ></div>{" "}
          <div
            className={`absolute flex flex-col text-white z-50 gap-10 items-start justify-center h-screen p-60 w-2/3 transition-all duration-700 ease-in-out ${
              index === currentSlide
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <div className="text-8xl flex gap-1 font-bold">
              <span className="text-white">{slide.title}</span>
              <span className="text-red-500">.</span>
            </div>
            <div className="text-xl">{slide.description}</div>
            <div>
              <button className="bg-red-500 p-3 px-4">SEE PROJECT</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
