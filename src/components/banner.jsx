import GradientText from "./gradientText";
import accept from "../assets/accept.png";
import women from "../assets/women.png";
import upRight from "../assets/upRight.png";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

function BannerCard({ src, text }) {
  return (
    <div className="flex gap-2 items-center w-fit max-lg:w-full border-2 p-2 rounded-full border-[#f5f5f55d] bg-[#ffffff39]">
      <img src={src} alt="accept" className="w-4" />
      <span className="text-sm">{text}</span>
    </div>
  );
}

function Progress({ text, color, value }) {
  return (
    <div className="w-[30%] max-lg:w-[20%] h-full flex flex-col gap-2">
      <CircularProgressbar
        value={value}
        text={text}
        strokeWidth={12}
        styles={buildStyles({
          textColor: "gray",
          trailColor: "#ffffff63",
          pathColor: color,
          textSize: "20px",
        })}
      />
    </div>
  );
}

function ProgressContent({ color, title, percentage }) {
  return (
    <div className="flex gap-2 items-center w-full justify-between border-2 p-2 rounded-full border-[#f5f5f55d] bg-[#ffffff63]">
      <div className="flex gap-2 items-center">
        <div className="w-3 h-3 rounded-full" style={{ backgroundColor: color }}></div>
        <p className="text-sm">{title}</p>
      </div>
      <span className="text-sm">{percentage}</span>
    </div>
  );
}

function Banner() {
  const width = "w-full";
  const cardsData = [
    { src: accept, text: "Advance career growth opportunities" },
    { src: accept, text: "Communicate ideas persuasively" },
    { src: accept, text: "Boost professional confidence daily" },
    { src: accept, text: "Advance career growth opportunities" },
  ];

  const progressData = [
    { text: "58%", value: 58, color: "#F46800" }, 
    { text: "25%", value: 25, color: "#0DB044" }, 
    { text: "12%", value: 12, color: "#0E3DC9" }, 
  ];

  const progressContentData = [
    { color: "#F46800", title: "Current Users", percentage: "58%" },
    { color: "#0DB044", title: "User Retention", percentage: "25%" },
    { color: "#0E3DC9", title: "Interaction Rate", percentage: "12%" },
  ];

  const progressColor = ["#F46800", "#0DB044", "#0E3DC9", "whitesmoke"];

  return (
    <div className="flex justify-center items-center mt-20 mb-5">
      <div className="w-[80%] max-lg:w-[95%] max-xl:w-[90%] h-full bg-[radial-gradient(ellipse_at_bottom,_#ffc590_0%,_#ffc590_15%,_#f0d4d9_40%,_#e0ecf9_60%,_#deeaf6_100%)] rounded-4xl flex px-6">
        <div className="w-full flex max-lg:flex-col max-lg:justify-center justify-between">
          <div className="w-[35%] max-lg:w-full flex flex-col justify-between max-lg:justify-between py-6">
            <div className="w-full">
              <GradientText
                title={"REAL STORIES"}
                tag={"Real People, Real Impact"}
                text={
                  "Authentic stories of transformation driving meaningful change globally."
                }
                width={width}
              />
            </div>
            <div className="flex flex-col max-lg:items-center gap-2 py-5 w-full">
              {cardsData.map((item, index) => {
                return <BannerCard key={index} src={item.src} text={item.text} />;
              })}
            </div>
          </div>

          <div className="w-[35%] h-full flex justify-center max-lg:hidden">
            <img
              src={women}
              alt="women"
              className="w-full h-full mt-[12px] object-cover max-md:hidden"
            />
          </div>

          <div className="w-[30%] max-xl:w-[30%] items-end max-lg:items-center max-lg:w-full max-md:gap-4 flex flex-col max-lg:gap-2 justify-between py-6">
            <div className="flex flex-col gap-2 p-3 w-[75%] max-md:w-full bg-[#f6f2f2bc] rounded-3xl">
              <div className="flex justify-between items-center w-full">
                <h3>Resource Allocation</h3>
                <div className="p-2 bg-white rounded-full w-7">
                  <img src={upRight} alt="upRight" />
                </div>
              </div>

              <div className="flex justify-between items-center gap-2 w-full mt-2">
                {progressData.map((item, index) => {
                  return (
                    <Progress
                      key={index}
                      text={item.text}
                      color={item.color}
                      value={item.value}
                    />
                  );
                })}
              </div>

              <div className="flex flex-col items-center gap-3 w-full">
                {progressContentData.map((item, index) => {
                  return (
                    <ProgressContent
                      key={index}
                      color={item.color}
                      title={item.title}
                      percentage={item.percentage}
                    />
                  );
                })}
              </div>
            </div>

            <div className="flex items-center self-end max-lg:self-center bg-[#f6f2f2bc] rounded-full w-fit p-2 pl-[28px]">
              {progressColor.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="w-15 h-15 max-md:w-12 max-md:h-12 rounded-full ml-[-20px]"
                    style={{ backgroundColor: item }}
                  ></div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;