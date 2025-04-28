import BoxTitle from "./boxTitle";
import upRight from "../assets/upRight.png";
import tick from "../assets/tick.svg";

function Remainder({ src, title, text }) {
  return (
    <div className="w-full h-full rounded-2xl flex gap-2 bg-white p-2">
      {src ? (
        <img src={src} alt={title} className="w-5" />
      ) : (
        <div className="self-center w-[18px] h-[18px] min-w-[18px] min-h-[18px] shrink-0 rounded-full border-2 border-[#80808044]"></div>
      )}
      <div className="flex flex-col">
        <p className="text-sm font-medium">{title}</p>
        <span className="text-[10px] text-gray-500">{text}</span>
      </div>
    </div>
  );
}

function Box4() {
  const remainderData = [
    {
      id: 0,
      src: tick,
      title: "Content Refresh Alert",
      text: "Post the content, share insights and stireactive Comments!",
    },
    {
      id: 1,
      src: "",
      title: "Engagement Check-in",
      text: "Reply to comments, interact with followers, and spark conversations today.",
    },
    {
      id: 2,
      src: "",
      title: "Analytics Review Day",
      text: "Time to check your name your reich, impresons and growth to refine you.",
    },
  ];
  return (
    <div className="w-full h-full bg-[#f5f7fba7] flex flex-col justify-between gap-2 items-center p-3 rounded-3xl">
      <BoxTitle title={"Remainders"} src={upRight} />
      <div className="w-full flex flex-col items-center gap-2">
        {remainderData.map((item) => {
          return (
            <Remainder
              key={item.id}
              src={item.src}
              title={item.title}
              text={item.text}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Box4;