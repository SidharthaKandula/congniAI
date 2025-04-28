import BoxTitle from "./boxTitle";
import upRight from "../assets/upRight.png";

function BarGraph({ percentage, range }) {
  return (
    <div className="flex flex-col items-center gap-2">
      <span className="text-xs font-medium">{percentage}%</span>
      {percentage >= "30" ? (
        <>
          <div
            className={`w-17 bg-[#f88d38] rounded-xl`}
            style={{ height: `${Math.floor(percentage) * 4}px` }}
          ></div>
          <span className="text-[10px] text-white px-2 py-0.5 bg-black rounded-full">
            {range}
          </span>
        </>
      ) : (
        <>
          <div
            className={`w-17 bg-[#f88e3830] rounded-xl`}
            style={{ height: `${Math.floor(percentage) * 4}px` }}
          ></div>
          <span className="text-[10px] text-gray-500 px-2 py-0.5">{range}</span>
        </>
      )}
    </div>
  );
}
function Box3() {
  const graphData = [
    { id: 0, percentage: 13.8, range: "18-24" },
    { id: 1, percentage: 32.2, range: "25-34" },
    { id: 2, percentage: 26.9, range: "35-44" },
    { id: 3, percentage: 17.9, range: "45-54" },
    { id: 4, percentage: 14.2, range: "55-64" },
    { id: 5, percentage: 9.5, range: "65+" },
  ];
  return (
    <div className="w-full h-full bg-[#f5f7fba7] flex flex-col gap-1 items-center p-3 rounded-3xl">
      <BoxTitle title={"Age-Based User Trends"} src={upRight} />

      <div className="w-full h-full rounded-2xl flex flex-col gap-2 justify-center">
        <div className="flex flex-col">
          <p className="text-[10px] text-gray-500">People Born Between</p>
          <span className="text-lg font-medium">1948-2002</span>
        </div>

        <div className="flex items-end gap-2 justify-center max-sm:justify-start overflow-x-hidden">
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
  );
}

export { Box3, BarGraph };