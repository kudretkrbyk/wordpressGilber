export default function Navbar() {
  return (
    <div className="flex w-full items-center justify-between p-10 text-white fixed z-50">
      <div className="flex items-center justify-center gap-16 w-full ">
        {" "}
        <div className="flex items-end justify-center gap-1">
          <div className="text-4xl">Gilber</div>
          <div className="text-4xl text-red-700">.</div>
        </div>
        <div className="flex items-center justify-center gap-10 w-full">
          <div className=" hover:text-red-500 duration-500 hover:cursor-pointer">
            HOME{" "}
          </div>
          <div className=" hover:text-red-500 duration-500 hover:cursor-pointer">
            ABOUT
          </div>
          <div className=" hover:text-red-500 duration-500 hover:cursor-pointer">
            PROJECTS
          </div>
          <div className=" hover:text-red-500 duration-500 hover:cursor-pointer">
            EDUCATION
          </div>
          <div className=" hover:text-red-500 duration-500 hover:cursor-pointer">
            TESTIMONIALS
          </div>
          <div className=" hover:text-red-500 duration-500 hover:cursor-pointer">
            PARTNERS
          </div>
          <div className=" hover:text-red-500 duration-500 hover:cursor-pointer">
            BLOG
          </div>
          <div className=" hover:text-red-500 duration-500 bg-red-500 hover:cursor-pointer">
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
