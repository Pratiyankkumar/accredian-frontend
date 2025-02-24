"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// Define types for our data structure
type FAQItem = {
  question: string;
  answer: string;
};

type Categories = {
  [key: string]: FAQItem[];
};

const FAQAccordion = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState("Eligibility");

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const categories: Categories = {
    Eligibility: [
      {
        question:
          "Do I need to have prior Product Management and Project Management experience to enroll in the program?",
        answer:
          "No, the program is designed to be inclusive of all levels of experience. All topics will be covered from the basics, making it suitable for individuals from any field of work.",
      },
      {
        question: "Is there an age requirement for enrollment?",
        answer:
          "No, individuals of all ages are welcome to enroll in the program.",
      },
    ],
    "How To Use?": [
      {
        question: "What is the minimum system configuration required?",
        answer:
          "This information would be displayed when this item is expanded.",
      },
      {
        question: "Can I access the platform on mobile?",
        answer:
          "Yes, the platform is fully responsive and accessible on mobile devices.",
      },
    ],
    "Terms & Conditions": [
      {
        question: "What is the refund policy?",
        answer:
          "Refund policies vary by program and provider. Please check our terms page.",
      },
      {
        question: "Are there any penalties for late payments?",
        answer:
          "Late payment policies vary. Please refer to the terms and conditions for more details.",
      },
    ],
  };

  return (
    <div id="faqs" className="w-full mt-8 max-w-4xl mx-auto px-4 mb-8">
      <div className="text-center mb-6">
        <p className="text-center text-3xl font-bold mb-8">
          Frequently Asked <span className="text-[#1A73E8]">Questions</span>
        </p>
      </div>

      {/* Main container - column on small screens, row on large screens */}
      <div className="flex flex-col lg:flex-row gap-6 w-full">
        {/* Sidebar buttons - horizontal on small screens, vertical on large screens */}
        <div className=" flex-row lg:flex-col bp5:flex hidden gap-4 justify-center lg:justify-start lg:w-1/4 overflow-x-auto lg:overflow-x-visible">
          {Object.keys(categories).map((category) => (
            <button
              key={category}
              className={`p-3 text-center rounded-lg shadow font-medium transition-colors min-w-[120px] lg:w-full ${
                activeCategory === category
                  ? "bg-blue-500 text-white"
                  : "bg-white text-blue-500 hover:bg-blue-50"
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* FAQ accordion - full width on all screens */}
        <div className="space-y-4 w-full lg:w-3/4">
          {categories[activeCategory]?.map((item, index) => (
            <div
              key={index}
              className="border rounded-md overflow-hidden w-full"
            >
              <button
                className="flex items-center w-full justify-between p-4 text-left bg-white hover:bg-gray-50"
                onClick={() => toggleFAQ(index)}
              >
                <span className="font-medium text-sm md:text-base">
                  {item.question}
                </span>
                <ChevronDown
                  className={`transition-transform flex-shrink-0 ml-2 ${
                    openFAQ === index ? "rotate-180" : ""
                  }`}
                  size={20}
                />
              </button>

              <AnimatePresence initial={false}>
                {openFAQ === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{
                      height: "auto",
                      opacity: 1,
                      transition: {
                        height: { duration: 0.3, ease: "easeOut" },
                        opacity: { duration: 0.25, ease: "easeInOut" },
                      },
                    }}
                    exit={{
                      height: 0,
                      opacity: 0,
                      transition: {
                        height: { duration: 0.3, ease: "easeIn" },
                        opacity: { duration: 0.25, ease: "easeInOut" },
                      },
                    }}
                    className="bg-white overflow-hidden"
                  >
                    <div className="p-4 border-t">
                      <p className="text-sm md:text-base text-gray-700">
                        {item.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQAccordion;
