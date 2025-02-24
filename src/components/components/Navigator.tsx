"use client";

export default function NavigatorComp() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className=" bp3:w-[40%] w-[95%] mt-8 bg-[#E5EFFC] rounded-full h-[50px] flex flex-row justify-evenly items-center">
      {["Refer", "Benefits", "FAQs", "Support"].map((item) => (
        <p
          key={item}
          onClick={() => scrollToSection(item.toLowerCase())}
          className="cursor-pointer text-gray-700 font-medium hover:text-blue-600 hover:scale-110 transition-transform duration-300"
        >
          {item}
        </p>
      ))}
    </div>
  );
}
