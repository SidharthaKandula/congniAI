import BlackBtn from "./blackBtn";

function Navbar() {
  const menuItems = ["Home", "Work", "Expertise", "Pricing", "Testimonial"];

  return (
    <div className="flex justify-evenly max-md:justify-between items-center h-20 mb-10 max-md:px-2">
      <div>
        <h2 className="text-3xl font-normal">
          Cogni<span className="font-medium">AI</span>
        </h2>
      </div>

      <ul className="flex items-center box-border bg-[#f9f9f9] p-2 rounded-full">
        {menuItems.map((item, index) => (
          <li key={index}>
            <span
              className={`px-7 py-2.5 rounded-full text-sm inline-block max-lg:hidden max-md:hidden ${
                item === "Home" ? "bg-[#F46800] text-white" : "text-gray-800"
              }`}
            >
              {item}
            </span>
          </li>
        ))}

        <li className="hidden max-md:block">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12H12m-8.25 5.25h16.5"
            />
          </svg>
        </li>
      </ul>

      <div className="max-md:hidden">
        <BlackBtn text="Contact us" />
      </div>
    </div>
  );
}

export default Navbar;