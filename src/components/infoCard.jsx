function InfoCard({ src, title, text }) {
    return (
      <div className="flex flex-col justify-between h-full gap-7 p-4 rounded-2xl items-start bg-[#f6f2f2bc] w-full">
        <div className="p-2 bg-white rounded-full">
          <img src={src} alt="icons" className="w-9" />
        </div>
        <div className="flex flex-col gap-2">
          <h2 className="text-lg font-bold">{title}</h2>
          <p className="text-sm text-gray-500">{text}</p>
        </div>
      </div>
    );
  }
  
  export default InfoCard;