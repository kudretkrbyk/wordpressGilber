import { MdArrowForwardIos } from "react-icons/md";
import { MdOutlineArrowBackIos } from "react-icons/md";

export default function Testimonials() {
  return (
    <div className="w-full h-screen relative flex items-center justify-center p-20">
      <div className="absolute bg-center bg-cover w-full h-screen bg-[url('http://paul-themes.com/wordpress/gilber/wp-content/uploads/2020/12/testimonials.jpg')]"></div>
      <div className="w-full h-full flex  items-end justify-between p-20  z-50">
        <div className="w-1/2 h-full flex flex-col items-start justify-between ">
          <svg
            className=""
            xmlns="http://www.w3.org/2000/svg"
            fill="#ef4444" // SVG'nin rengini buradan değiştirebilirsiniz
            viewBox="0 0 75 75"
            style={{ height: "75px" }} // Style attribute'u bir nesne olarak verilmelidir
          >
            <defs></defs>
            <path
              fill="#ef4444"
              d="M25 0C16.9271 0 10.7422 2.14844 6.44531 6.44531 2.14844 10.7422 0 16.9271 0 25v50h31.25V25H12.5c0-4.4271.9766-7.6172 2.9297-9.5703C17.3828 13.4766 20.5729 12.5 25 12.5V0zm43.75 0c-8.0729 0-14.2578 2.14844-18.5547 6.44531C45.8984 10.7422 43.75 16.9271 43.75 25v50H75V25H56.25c0-4.4271.9766-7.6172 2.9297-9.5703C61.1328 13.4766 64.3229 12.5 68.75 12.5V0z"
            ></path>
          </svg>
          <div className="text-2xl text-white w-full">
            Creative & dedicated is things that gilber studio brings for your
            business.
          </div>
        </div>
        <div className="text-white flex flex-col gap-10 w-1/2 p-20 ">
          <div className="flex flex-col gap-10 full">
            <div>
              "Said heaven dry made Them gathering the very second morning us be
              divide isn't. Saw Seasons winged replenish grass from set can't
              for he which. You third god unto let."
            </div>
            <div className="flex flex-col gap-8 text-xl">
              <div className="font-bold">Dwight Schrute</div>
              <div>The Office</div>
            </div>
          </div>
          <div className="flex items-center justify-start w-full gap-10 mt-10">
            <div className="text-white cursor-pointer border border-white p-2">
              <MdOutlineArrowBackIos className="size-10" />
            </div>
            <div className="text-white cursor-pointer border border-white p-2">
              <MdArrowForwardIos className="size-10" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
