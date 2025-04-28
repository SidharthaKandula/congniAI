import GradientText from "./gradientText";
import BlackBtn from "./blackBtn";
import profile from "../assets/profile.png";
import profile2 from "../assets/profile2.png";
import profile3 from "../assets/profile3.png";
import profile4 from "../assets/profile4.png";
import { BarGraph } from "./box3";
function Automation() {
  const width = "w-[45%] max-md:w-[90%]";
  const imageData = [profile, profile2, profile3, profile4];
  const graphData = [
    { id: 0, percentage: 13.8, range: "18-24" },
    { id: 1, percentage: 32.2, range: "25-34" },
    { id: 2, percentage: 26.9, range: "35-44" },
    { id: 3, percentage: 17.9, range: "45-54" },
    { id: 4, percentage: 14.2, range: "55-64" },
    { id: 5, percentage: 9.5, range: "65+" },
  ];
  const colors = [
    "#ffeae2",
    "#f88d38",
    "#ffeae2",
    "#ffeae2",
    "#f88d38",
    "#f88d38",
    "#ffeae2",
    "#ffeae2",
    ...Array(8).fill("#f88d38"),
  ];

  const colors2 = [...Array(10).fill("#ffeae2"), ...Array(6).fill("#f88d38")];

  return (
    <div className="flex items-center justify-center my-20">
      <div className="w-[80%] max-lg:w-[95%] max-xl:w-[90%] flex flex-col items-center justify-center gap-5">
        <div className="flex items-center justify-between w-full max-md:justify-center max-md:text-center">
          <GradientText
            title={"USE CASE"}
            tag={"Optimize Workflows with Smart Automation Tools"}
            text={
              "Organize tasks, track progress, and achieve more effortlessly."
            }
            width={width}
          />
          <div className="max-md:hidden">
            <BlackBtn text={"See AI in Action"} />
          </div>
        </div>

        <div className="flex w-full h-full max-lg:flex-col items-stretch gap-5">
          <div className="w-[35%] max-lg:w-full bg-[#f5f7fb] flex flex-col rounded-3xl py-5 px-6">
            <div className="flex-1">
              <div className="flex flex-col gap-2 mb-4">
                <h3 className="text-xl font-medium">For Business Leaders</h3>
                <p className="text-md text-gray-500">
                  Identify trends & opportunities in real-time to make
                  data-driven decisions and stay ahead of the competition.
                </p>
              </div>

              <div className="p-3 rounded-2xl bg-white flex max-lg:items-center flex-col gap-7">
                <h3 className="self-start text-md font-medium">
                  Trend Insights
                </h3>

                <div className="flex items-center gap-4">
                  <div className="flex flex-col gap-2 overflow-hidden">
                    <div className="flex items-center gap-2 flex-wrap w-[150px] max-md:w-[120px]">
                      {colors.map((color, index) => (
                        <div
                          key={index}
                          className="w-[30px] h-[30px] max-lg:w-[25px] max-lg:h-[25px] max-md:w-[23px] max-md:h-[23px] rounded-lg"
                          style={{ backgroundColor: color }}
                        />
                      ))}
                    </div>
                    <div className="flex items-center justify-between gap-2">
                      <p className="font-semibold">84%</p>
                      <span className="text-gray-500 text-sm">Fashion</span>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2 overflow-hidden">
                    <div className="flex items-center gap-2 flex-wrap w-[150px] max-md:w-[120px]">
                      {colors2.map((color, index) => (
                        <div
                          key={index}
                          className="w-[30px] h-[30px] max-lg:w-[25px] max-lg:h-[25px] max-md:w-[23px] max-md:h-[23px] rounded-lg"
                          style={{ backgroundColor: color }}
                        />
                      ))}
                    </div>
                    <div className="flex items-center justify-between gap-2">
                      <p className="font-semibold">43%</p>
                      <span className="text-gray-500 text-sm">Tech</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-[65%] max-lg:w-full bg-[#f5f7fb] flex max-md:flex-col rounded-3xl py-5 px-6">
            <div className="flex-1 flex max-md:flex-col gap-3">
              <div className="w-[50%] max-md:w-full flex flex-col gap-3 justify-between">
                <div className="flex flex-col gap-2">
                  <h3 className="text-xl font-medium">For Marketing Teams</h3>
                  <p className="text-md text-gray-500">
                    Identify trends & opportunities in real-time to make
                    data-driven decisions and stay ahead of the competition.
                  </p>
                </div>
                <div className="flex items-center pl-2">
                  {imageData.map((item) => {
                    return (
                      <img
                        src={item}
                        alt="profile"
                        className="w-13 rounded-full border-2 ml-[-15px]"
                      />
                    );
                  })}
                </div>
              </div>

              <div className="w-[50%] max-md:w-full bg-white rounded-2xl p-3 flex flex-col gap-5 justify-around">
                <div className="self-start flex flex-col gap-2">
                  <h3 className="text-md font-medium">Age Based User Trends</h3>
                  <div className="flex flex-col">
                    <p className="text-[10px] text-gray-500">
                      People Born Between
                    </p>
                    <span className="text-lg font-medium">1948-2002</span>
                  </div>
                </div>
                <div className="flex items-end gap-3 overflow-x-hidden max-w-full">
                  {graphData.map((item) => {
                    return (
                      <BarGraph
                        key={item.id}
                        percentage={item.percentage}
                        range={item.range}
                      />
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Automation;