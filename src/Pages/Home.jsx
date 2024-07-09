import { FaPlay } from "react-icons/fa";

export default function Home() {
  return (
    <div className="w-full h-screen relative  ">
      <div className="z-0 absolute top-0 left-0 w-full">
        <div className="bg-cover bg-center w-full h-screen bg-[url(http://paul-themes.com/wordpress/gilber/wp-content/uploads/2020/12/home.jpg)]   "></div>{" "}
      </div>

      <div className="z-50 flex flex-col text-white w-6/12 h-screen  items-start justify-center border border-white p-48 gap-10">
        <div className="z-50 relative flex items-center justify-center w-1/4 h-16 group ">
          <div className=" absolute border p-10 rounded-full group-hover:scale-125 duration-500"></div>
          <div className="absolute">
            {" "}
            <FaPlay className="size-10 group-hover:scale-110 duration-500" />
          </div>
        </div>
        <div className="z-50">Product Designer</div>
        <div className="flex items-end gap-2 z-50 text-xl">
          <div className="text-4xl">Gilber</div>
          <div className="text-5xl text-red-500">.</div>
        </div>
        <div className="z-50 ">
          Working with client and community, we deliver masterplans that create
          vibrant new places and spaces, attract people, and encourage.
        </div>
      </div>
    </div>
  );
}
