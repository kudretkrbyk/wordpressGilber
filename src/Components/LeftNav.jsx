import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

export default function LeftNav() {
  return (
    <div className="flex flex-col items-start justify-center fixed top-20 p gap-4 w-full border border-black">
      <div className="flex flex-col items-center gap-8  border border-black w-36">
        {" "}
        <div className="bg-gray-500 w-[1px] h-48"></div>
        <div className="flex flex-col gap-4">
          <div>
            <FaFacebookF className="size-8" />
          </div>
          <div>
            <FaTwitter className="size-8" />
          </div>
          <div>
            <FaInstagram className="size-8" />
          </div>
        </div>
        <div className="bg-gray-500 w-[1px] h-48"></div>
        <div className=" flex items-end justify-end w-full border border-black px-3">
          {" "}
          <div>© Gilber. 2020</div>
        </div>
      </div>
    </div>
  );
}
