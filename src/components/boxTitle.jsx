function BoxTitle({ title, src }) {
    return (
      <div className="flex justify-between items-center w-full">
        <p className="text-md font-medium">{title}</p>
        <img
          src={src}
          alt="up-right-icon"
          className="p-2 bg-white rounded-full w-7"
        />
      </div>
    );
  }
  
  export default BoxTitle;