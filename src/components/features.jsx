import InfoCard from "./infoCard";
import GradientText from "./gradientText";
import analytics from "../assets/analytics.png";
import folder from "../assets/folder.png";
import code from "../assets/code.png";
import loop from "../assets/loop.png";
import more from "../assets/more.png";
import internet from "../assets/internet.png";

function AutomationData({ src, title, text, size }) {
  return (
    <div className="flex items-center justify-between gap-2 w-full bg-[#f6f2f2bc] p-2 rounded-2xl">
      <div className="flex items-center gap-4">
        <div className="p-2 bg-[#f6f2f2bc] rounded-full">
          <img src={src} alt="internet" className="w-4 bg-white" />
        </div>
        <div className="w-[80%]">
          <span className="text-sm font-bold">{title}</span>
          <p className="text-[10px]">{text}</p>
        </div>
      </div>
      <span className="text-xs text-gray-500 text-nowrap">{size}</span>
    </div>
  );
}
function Features() {
  const width = "w-[55%] max-md:w-[90%]";
  const infoData1 = [
    {
      src: analytics,
      title: "Predictive Analytics",
      text: "Forecast trends with Al-driven insights.",
    },
    {
      src: folder,
      title: "Real-Time Reporting",
      text: "Interactive dashboards for better decision-making.",
    },
  ];
  const infoData2 = [
    {
      src: code,
      title: "No-Code Simplicity",
      text: "Designed for business users, not just data scientists",
    },
    {
      src: loop,
      title: "Seamless Integrations",
      text: "Connect with your CRM, eCommerce, and databases.",
    },
  ];

  const automationData = [
    {
      id: 0,
      src: internet,
      title: "Content Refresh Alert",
      text: "Post fresh content, share insights, and stay active. Consistency is key!",
      size: "20MB",
    },
    {
      id: 1,
      src: internet,
      title: "Engagement Boost Reminder",
      text: "hare valuable content, post consistently, and keep your audience coming back!",
      size: "20MB",
    },
  ];
  function smallBox() {
    const boxes = [];
    for (let i = 0; i < 17; i++) {
      boxes.push(<div key={i} className="h-6 bg-[#e9e6e6] w-3"></div>);
    }
    return boxes;
  }
  return (
    <div className="flex justify-center w-full my-20">
      <div className="w-[80%] max-lg:w-[95%] max-xl:w-[90%] flex flex-col items-center gap-7">
        <div className="w-full items-center flex justify-center text-center">
          <GradientText
            title={"KEY FEATURES"}
            tag={"Unlock Success with Actionable Performance Metrics"}
            text={
              "Track, analyze, and optimize data to improve performance and drive success."
            }
            width={width}
          />
        </div>

        <div className="flex items-center max-md:flex-col justify-center gap-4 w-full">
          <div className="flex flex-col gap-4 w-[75%] max-lg:w-full h-full">
            {infoData1.map((item) => {
              return (
                <InfoCard src={item.src} title={item.title} text={item.text} />
              );
            })}
          </div>

          <div className="w-full max-lg:w-[50%] max-md:w-full bg-[#FFF6EA] h-full rounded-2xl justify-center items-center flex flex-col gap-2 py-3">
            <div className="w-[90%]  max-md:w-full h-[73%] max-md:h-full bg-white flex flex-col gap-2 p-5 rounded-2xl mt-7 border-[20px] border-[#f2e6d766]">
              <img src={more} alt="more" className="w-9" />
              <div className="h-2.5 w-full bg-[linear-gradient(to_right,_#f46a0025,_#F46800)] rounded-2xl"></div>

              <div className="w-full flex items-center gap-2 mt-1">
                <div className="h-6 bg-[#e9e6e6] w-3 rounded-l-2xl"></div>
                {smallBox()}
                <div className="h-6 bg-[#e9e6e6] w-3 rounded-r-2xl"></div>
              </div>

              <div className="flex items-center rounded-2xl w-fit bg-[#f6f2f2bc] p-1 my-3">
                <span className="bg-[#F46800] text-xs text-white px-4 py-2 rounded-2xl">
                  News Upload
                </span>
                <span className="text-xs px-4 py-2 rounded-2xl">Trending</span>
              </div>

              <div className="flex items-center flex-col w-full gap-2">
                {automationData.map((item) => {
                  return (
                    <AutomationData
                      key={item.id}
                      src={item.src}
                      title={item.title}
                      text={item.text}
                      size={item.size}
                    />
                  );
                })}
              </div>
            </div>

            <div className="w-full flex flex-col gap-2 justify-center px-5">
              <h3 className="text-xl font-bold">Automated Data Processing</h3>
              <p className="text-md text-gray-500">
                Al intelligently cleans, structures, and analyzes vast amounts
                of raw data, transforming it into meaningful insights for
                informed decision-making.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-4 w-[75%] max-lg:w-full h-full">
            {infoData2.map((item) => {
              return (
                <InfoCard src={item.src} title={item.title} text={item.text} />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;