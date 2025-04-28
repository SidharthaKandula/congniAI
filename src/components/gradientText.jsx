function GradientText({ title, tag, text, width }) {
    return (
      <div className={`flex flex-col gap-3 ${width}`}>
        <p className="text-md text-[#F46800] font-bold">{title}</p>
        <h2 className="text-3xl font-semibold bg-gradient-to-r from-[#1a1a1a] via-[#1a1a1a] to-[#f46800] bg-clip-text text-transparent">
          {tag}
        </h2>
        <span className="text-md text-gray-500">{text}</span>
      </div>
    );
  }
  
  export default GradientText;