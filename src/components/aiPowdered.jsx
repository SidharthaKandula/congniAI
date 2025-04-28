import userImages from "../assets/userImages.png";
import star from "../assets/star.png";
import starredFile from "../assets/starredFile.png";
import paper from "../assets/paper.png";
import hub from "../assets/hub.png";
import BlackBtn from "./blackBtn";

function AIPowered() {
  return (
    <div className="flex items-center justify-center mt-15">
      <div className="w-[70%] max-xl:w-[90%] max-lg:w-[95%] flex flex-col items-center justify-center gap-18 mb-10">
        <div className="w-[85%] max-lg:w-[90%] max-md:w-full">
          <h2 className="text-3xl max-md:text-xl font-normal text-center leading-[1.3] bg-gradient-to-r from-[#1a1a1a] via-[#1a1a1a] to-[#f46800] bg-clip-text text-transparent">
            CogniAl is an advanced Al-powered data analysis platform designed to
            transfor raw data into actionable insights.
          </h2>
        </div>
        <div className="flex w-full justify-center items-center">
          <div className="bg-[#f46a0025] p-3 rounded-full">
            <img src={userImages} alt="userImages" className="w-6" />
          </div>
          <div className="w-[6%] h-[4px] bg-[#f46a0025]"></div>
          <div className="bg-[#f46a0025] p-3 rounded-full">
            <img src={starredFile} alt="starredFile" className="w-6" />
          </div>
          <div className="w-[9%] h-[4px] bg-[linear-gradient(to_right,_#f46a0025,_#F46800)]"></div>
          <div className="p-5 rounded-full bg-[#F46800] ring-[12px] ring-[rgba(244,106,0,0.11)] max-md:ring-8 max-md:outline-[15px] outline-[25px] outline-[rgba(244,106,0,0.06)]">
            <img src={star} alt="star" className="w-8" />
          </div>
          <div className="w-[9%] h-[4px] bg-[linear-gradient(to_left,_#f46a0025,_#F46800)]"></div>
          <div className="bg-[#f46a0025] p-3 rounded-full">
            <img src={hub} alt="hub" className="w-6" />
          </div>
          <div className="w-[6%] h-[4px] bg-[#f46a0025]"></div>
          <div className="bg-[#f46a0025] p-3 rounded-full">
            <img src={paper} alt="paper" className="w-6" />
          </div>
        </div>
        <div className="w-[47%] max-md:w-[90%] max-lg:w-[70%] text-center">
          <p className="text-md max-md:text-sm text-gray-400">
            Using cutting-edge machine learning and deep analytics, CogniAl
            helps businesses, researchers, and decision-makers unlock hidden
            patterns, predict trends, and optimize performance.
          </p>
        </div>

        <div>
          <BlackBtn text="Get Started Now" />
        </div>
      </div>
    </div>
  );
}

export default AIPowered;