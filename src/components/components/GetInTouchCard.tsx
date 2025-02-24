import { Button } from "../ui/button";

/* eslint-disable @next/next/no-img-element */
export default function GetInTouchCard() {
  return (
    <div
      id="support"
      className="bp6:w-[80%] w-[95%] flex-wrap bp6:h-[210px] h-[280px] rounded-xl mb-8 bg-gradient-to-r flex flex-row items-center justify-evenly from-[#1A73E8] to-[#5294f7]"
    >
      <div className="p-1 bg-gray-100 rounded-md">
        <img
          src="/images/headphone.svg"
          alt="headphone-image"
          className="w-20 h-20"
        />
      </div>

      <div className="w-[60%]">
        <p className="text-3xl text-white font-semibold">
          Want to delve deeper into the program
        </p>
        <p className="text-2x; text-white">
          Share your details to receive expert insights from our partner
          program!
        </p>
      </div>

      <Button
        variant={"default"}
        className="w-[200px]  h-[52px] text-xl text-[#1A73E8] bg-white hover:bg-white hover:text-[#1A73E8]/80 transition-colors"
      >
        Get in touch
      </Button>
    </div>
  );
}
