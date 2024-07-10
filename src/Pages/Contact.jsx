export default function Contact() {
  return (
    <div className="w-full h-screen relative">
      <div className="z-30 absolute bg-cover bg-center w-full h-screen bg-[url(http://paul-themes.com/wordpress/gilber/wp-content/uploads/2020/12/contact.jpg)]   "></div>
      <div className="absolute z-50 flex items-center justify-center gap-20 w-full text-white p-32">
        <div className="z-50 flex flex-col gap-5 items-start justify-center p-20 w-1/2">
          <div className="text-5xl">Contact</div>
          <div className=" text-zinc-400 ">
            You’ll called htmlFor yielding male, so lights Stars abundantly, is
            their.
          </div>
          <div className="text-4xl">27 Queen St, New York USA</div>
          <div className="text-5xl">+7 (212) 674-25-10</div>
          <div className=" text-zinc-400 ">gilber.design@gmail.com</div>
        </div>
        <div className=" w-1/2 text-white">
          <form className="flex flex-col gap-5">
            <div className="flex gap-3">
              <p>
                <span className="text-white text-3xl">
                  Let's grab a coffee and jump on conversation
                </span>
                ,<span className="text-red-500 text-3xl"> chat with me.</span>
              </p>
            </div>
            <label className="">
              <span className="border-b border-gray-500 focus-within:border-white  p-2 flex items-start justify-start">
                <input
                  className="z-10 bg-transparent focus:border-teal focus:outline-none p-2 "
                  placeholder="Your Name"
                ></input>
              </span>
            </label>
            <label className="">
              <span className="border-b border-gray-500 focus-within:border-white   p-2 flex items-start justify-start">
                <input
                  className="z-10 bg-transparent  focus:outline-none p-2 "
                  placeholder="Your Email"
                ></input>
              </span>
            </label>
            <label className="">
              <span className="border-b border-gray-500 focus-within:border-white  p-2 flex items-start justify-start">
                <textarea
                  className=" h-48  w-full    bg-transparent focus:outline-none p-2    "
                  placeholder="Message "
                ></textarea>
              </span>
            </label>
            <button className="bg-red-600 text-white p-3 px-4 w-1/3">
              CONTACT ME
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
