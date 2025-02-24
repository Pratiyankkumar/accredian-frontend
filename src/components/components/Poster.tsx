import Image from "next/image";
import ReferButton from "./ReferButton";

export default function Poster() {
  const generateRandomPosition = () => ({
    top: `${Math.floor(Math.random() * 400) + 20}px`,
    left: `${Math.floor(Math.random() * 600) + 50}px`,
  });

  const moneyPositions = Array.from({ length: 5 }, generateRandomPosition);

  return (
    <div className="relative mt-8 h-[400px] bp3:w-[65%] w-[90%] shadow-md overflow-hidden rounded-md bg-[#EEF5FF] lg:flex lg:flex-row lg:items-center lg:justify-evenly">
      {/* Randomly placed money images */}
      {moneyPositions.map((pos, index) => (
        <div
          key={index}
          className="absolute z-10"
          style={{ top: pos.top, left: pos.left }}
        >
          <Image
            src="/images/money.png"
            alt="Money icon"
            width={80}
            height={80}
            className="h-auto w-auto"
          />
        </div>
      ))}

      {/* Text & Button Section */}
      <div className="relative z-20 bp1:ml-8 ml-0 bp4:text-start text-center flex h-[80%] w-full flex-col bp1:items-start items-center bp1:gap-0 gap-4 justify-center bp1:justify-evenly bp1:w-[30%]">
        <h1 className="text-4xl bp1:block hidden font-bold leading-tight sm:text-5xl">
          Let&apos;s Learn <span className="bp:1block">&amp; Earn</span>
        </h1>
        <h1 className="text-4xl bp1:hidden text-nowrap block font-bold leading-tight sm:text-5xl">
          Let&apos;s Learn <span className="">&amp; Earn</span>
        </h1>
        <p className="text-2xl sm:text-3xl">
          Get a chance to win up to{" "}
          <span className="font-bold text-[#1A73E8]">Rs. 15000</span>
        </p>
        <ReferButton />
      </div>

      {/* Image Section (Always Aligned to Bottom of Parent) */}
      <div className="relative bp1:flex hidden z-20 h-full w-full items-end justify-end lg:w-[70%]">
        <div className="absolute bottom-0 right-0 w-full h-full flex items-end">
          <Image
            src="/images/persons.png"
            alt="People showing thumbs up"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 70vw, 800px"
            priority
            className="object-cover"
            style={{
              objectPosition: "50% 50%", // Always sticks to bottom of parent
            }}
          />
        </div>
      </div>
    </div>
  );
}
