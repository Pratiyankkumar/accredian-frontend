/* eslint-disable @next/next/no-img-element */
import FAQAccordion from "@/components/components/FAQS";
import AccredianFooter from "@/components/components/Footer";
import GetInToucchCard from "@/components/components/GetInTouchCard";
import Header from "@/components/components/Header";
import Banner from "@/components/components/HeaderBanner";
import NavigatorComp from "@/components/components/Navigator";
import Poster from "@/components/components/Poster";
import ReferButton from "@/components/components/ReferButton";
import ProgramsTable from "@/components/components/Table";

export default function Home() {
  return (
    <div className="w-screen flex flex-col items-center">
      <Banner />
      <Header />
      <NavigatorComp />
      <Poster />
      <div
        id="refer"
        className="w-full py-10 mt-20 bg-[#EEF5FF] flex justify-center items-centers"
      >
        <div className="w-[80%] flex flex-col items-center justify-center ">
          <p className="text-center text-3xl font-bold mb-8">
            How do I <span className="text-[#1A73E8] ">Refer?</span>
          </p>
          <img
            className="bp3:block hidden"
            alt="refers"
            src="/images/group.svg"
          />
          <img
            className="bp3:hidden block"
            alt="refers"
            src="/images/group-phone.svg"
          />
          <ReferButton />
        </div>
      </div>
      <ProgramsTable />
      <ReferButton />
      <FAQAccordion />
      {/* <div className="w-full py-10 mt-12 flex justify-center items-center">
        <div className="w-[80%] relative flex flex-col items-center justify-center">
          <img
            alt="refers"
            src="/images/touch.svg"
            className="pointer-events-none select-none"
            draggable="false"
          />
        </div>
      </div> */}
      <GetInToucchCard />
      <AccredianFooter />
    </div>
  );
}
