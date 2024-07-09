export default function Navbar() {
  return (
    <div className="flex w-full items-center justify-between p-4 text-white  bg-blue-200">
      <div className="flex items-center justify-center gap-16 w-full ">
        {" "}
        <div className="flex items-end justify-center gap-1">
          <div className="text-5xl">Gilber</div>
          <div className="text-5xl text-red-700">.</div>
        </div>
        <div className="flex items-center justify-center gap-10 w-full">
          <div className=" hover:text-red-500 duration-500">HOME </div>
          <div className=" hover:text-red-500 duration-500">ABOUT</div>
          <div className=" hover:text-red-500 duration-500">PROJECTS</div>
          <div className=" hover:text-red-500 duration-500">EDUCATION</div>
          <div className=" hover:text-red-500 duration-500">TESTIMONIALS</div>
          <div className=" hover:text-red-500 duration-500">PARTNERS</div>
          <div className=" hover:text-red-500 duration-500">BLOG</div>
          <div className=" hover:text-red-500 duration-500 bg-red-500">
            CONTACT
          </div>
        </div>
      </div>
      <div className=" flex items-center justify-end text-nowrap w-full ">
        +7 (212) 674-25-10
      </div>
    </div>
  );
}
