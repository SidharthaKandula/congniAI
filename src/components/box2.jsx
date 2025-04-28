import BoxTitle from "./boxTitle";
import email from "../assets/email.png";
import iphone from "../assets/iphone.png";
import upRight from "../assets/upRight.png";

function ProfileGraph({ width, color, spanText }) {
  return (
    <div className={`flex flex-col w-[${width}] gap-1`}>
      <div className={`h-3.5 rounded-full`} style={{backgroundColor: color}}></div>
      <span className="text-[7px] pl-0.5 text-nowrap overflow-hidden overflow-ellipsis">
        {spanText}
      </span>
    </div>
  );
}

function SecureButton({ src, title }) {
  return (
    <div className="flex items-center gap-2 p-3 bg-white rounded-full">
      <img src={src} alt={title} className="w-5" />
      <span className="text-xs">{title}</span>
    </div>
  );
}

function Box2() {
  const profileGraphdata = [
    { width: "35%", color: "#06a33d", spanText: "Basic Information" },
    { width: "25%", color: "#1b76f3", spanText: "Content & Activity" },
    { width: "15%", color: "#f36700", spanText: "Social Links" },
    { width: "30%", color: "#ffffff", spanText: "Verification" },
  ];

  const secureButtons = [
    { src: email, title: "Verify by Email" },
    { src: iphone, title: "Enable 2FA" },
  ];

  return (
    <div className="w-full h-full bg-[#f5f7fba7] flex flex-col justify-between items-center p-3 rounded-3xl">
      <BoxTitle title={"Profile Completion"} src={upRight} />
      <div className="flex flex-col w-full gap-2 items-center">
        <div className="w-full flex justify-between items-center">
          <h2 className="text-3xl font-medium">87%</h2>
          <span className="px-3 py-2 bg-white text-gray-500 rounded-full text-xs">
            You're Almost There
          </span>
        </div>

        <div className="flex items-center w-full gap-1 py-1.5">
          {profileGraphdata.map((item) => (
            <ProfileGraph
              key={item.spanText}
              width={item.width}
              color={item.color}
              spanText={item.spanText}
            />
          ))}
        </div>

        <div className="flex flex-col gap-2 items-start w-full">
          <div>
            <p className="text-sm">Secure Your Account Now!</p>
          </div>
          <div className="flex items-start gap-2">
            {secureButtons.map((item) => (
              <SecureButton
                key={item.title}
                src={item.src}
                title={item.title}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Box2;