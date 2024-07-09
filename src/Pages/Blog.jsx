import BorderAnimationDiv from "../Components/BorderAnimationDiv";
import AnimationBorder from "../Components/AnimationBorder";

export default function Blog() {
  return (
    <div className="z-50 w-full h-screen flex items-center justify-center text-white bg-[#161616] ">
      <div className="z-50 flex flex-col gap-10 w-full p-48 h-screen items-start justify-center">
        <div className="z-50 text-xl ">Recent news</div>
        <div className="z-50 flex w-full gap-10">
          <div className="group  w-full relative ">
            <div className=" w-full ">
              {" "}
              <AnimationBorder></AnimationBorder>
            </div>
            <div className="  bg-cover w-full h-[400px] bg-center bg-[url(http://paul-themes.com/wordpress/gilber/wp-content/uploads/2020/12/single-post-03-1024x553.jpg)] "></div>
            <div className="  opacity-0 group-hover:opacity-100 duration-500 ">
              {" "}
              <BorderAnimationDiv></BorderAnimationDiv>
            </div>
          </div>

          <div className="  w-full group relative ">
            <div className=" w-full ">
              {" "}
              <AnimationBorder></AnimationBorder>
            </div>

            <div className="bg-cover  w-full h-[400px] bg-center bg-[url(http://paul-themes.com/wordpress/gilber/wp-content/uploads/2020/12/single-post-02-1024x553.jpg)]   "></div>
            <div className="  opacity-0 group-hover:opacity-100 duration-500 ">
              {" "}
              <BorderAnimationDiv></BorderAnimationDiv>
            </div>
          </div>
          <div className="  w-full  group relative ">
            <div className=" w-full ">
              {" "}
              <AnimationBorder></AnimationBorder>
            </div>
            <div className="bg-cover w-full h-[400px] bg-center bg-[url(http://paul-themes.com/wordpress/gilber/wp-content/uploads/2020/12/single-post-01-1024x468.jpg)]   "></div>
            <div className="   opacity-0 group-hover:opacity-100 duration-500  ">
              {" "}
              <BorderAnimationDiv></BorderAnimationDiv>
            </div>{" "}
          </div>
        </div>
      </div>
    </div>
  );
}
