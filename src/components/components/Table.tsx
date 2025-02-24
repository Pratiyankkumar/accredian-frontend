"use client";

import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronRight, Menu } from "lucide-react";
import ToggleSwitch from "./ToogleSwitch";

const ProgramsTable = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  const navItems = [
    "ALL PROGRAMS",
    "PRODUCT MANAGEMENT",
    "STRATEGY & LEADERSHIP",
    "BUSINESS MANAGEMENT",
    "FINTECH",
    "SENIOR MANAGEMENT",
    "DATA SCIENCE",
    "DIGITAL TRANSFORMATION",
    "BUSINESS ANALYTICS",
  ];

  const programs = [
    {
      name: "Professional Certificate Program in Product Management",
      referrerBonus: 7000,
      refereeBonus: 9000,
    },
    {
      name: "PG Certificate Program in Strategic Product Management",
      referrerBonus: 9000,
      refereeBonus: 11000,
    },
    {
      name: "Executive Program in Data Driven Product Management",
      referrerBonus: 10000,
      refereeBonus: 10000,
    },
    {
      name: "Executive Program in Product Management and Digital Transformation",
      referrerBonus: 10000,
      refereeBonus: 10000,
    },
    {
      name: "Executive Program in Product Management",
      referrerBonus: 10000,
      refereeBonus: 10000,
    },
    {
      name: "Advanced Certification in Product Management",
      referrerBonus: 10000,
      refereeBonus: 10000,
    },
    {
      name: "Executive Program in Product Management and Project Management",
      referrerBonus: 10000,
      refereeBonus: 10000,
    },
  ];

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <div id="benefits" className="p-4 mt-8">
      <p className="text-center text-3xl font-bold mb-8">
        What are the <span className="text-[#1A73E8] ">Referral Benefits?</span>
      </p>
      {/* Mobile/Medium viewport menu button - only visible on smaller screens */}
      <div className="md:hidden mb-4 flex items-center">
        <Button
          variant="outline"
          size="sm"
          className="mr-2"
          onClick={toggleSidebar}
        >
          <Menu className="h-5 w-5" />
        </Button>
        <span className="font-bold">Programs</span>
      </div>

      <div className="flex flex-col md:flex-row gap-6">
        {/* Sidebar - Conditionally shown on mobile/small screens */}
        <Card
          className={`${
            showSidebar ? "block" : "hidden"
          } md:block w-full md:w-64 h-full rounded-md overflow-hidden shadow mb-4 md:mb-0`}
        >
          {/* Blue header for ALL PROGRAMS */}
          <div className="bg-blue-500 text-white p-4 flex justify-between items-center">
            <span className="font-bold">ALL PROGRAMS</span>
            <ChevronRight className="h-5 w-5" />
          </div>

          {/* Menu items */}
          <div>
            {navItems.slice(1).map((item, index) => (
              <div className="pb-6" key={item}>
                <div className="px-8 py-3 flex justify-between items-center">
                  <span className="font-bold text-[12px] text-gray-700">
                    {item}
                  </span>
                  <ChevronRight className="h-5 w-5 text-gray-700" />
                </div>
                {index < navItems.length - 2 && (
                  <div className="mx-4 border-b border-gray-200"></div>
                )}
              </div>
            ))}
          </div>
        </Card>

        {/* Main Content */}
        <Card className="flex-1 rounded-md">
          <CardContent className="p-4 md:p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="text-sm text-gray-500">Programs</div>
              <ToggleSwitch />
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="text-left p-2 md:p-4 text-gray-600">
                      Programs
                    </th>
                    <th className="text-left p-2 md:p-4 text-gray-600">
                      Referrer Bonus
                    </th>
                    <th className="text-left p-2 md:p-4 text-gray-600">
                      Referee Bonus
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {programs.map((program, index) => (
                    <tr key={index} className="border-t">
                      <td className="p-2 md:p-4 flex items-center gap-2">
                        <div className="text-blue-600 flex-shrink-0">📚</div>
                        <span className="text-sm md:text-base">
                          {program.name}
                        </span>
                      </td>
                      <td className="p-2 md:p-4 text-sm md:text-base">
                        ₹ {program.referrerBonus.toLocaleString()}
                      </td>
                      <td className="p-2 md:p-4 text-sm md:text-base">
                        ₹ {program.refereeBonus.toLocaleString()}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ProgramsTable;
