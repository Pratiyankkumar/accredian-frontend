import React, { useState } from "react";

export default function ToggleSwitch() {
  const [isOn, setIsOn] = useState(false);

  return (
    <div className="flex items-center gap-2">
      <span
        className={`text-sm transition-colors ${
          isOn ? "text-blue-500" : "text-gray-500"
        }`}
      >
        {isOn ? "Enrolled" : "Not Enrolled"}
      </span>
      <div
        className={`w-10 h-5 flex items-center rounded-full p-1 cursor-pointer transition-all duration-300 ${
          isOn ? "bg-blue-500" : "bg-gray-300"
        }`}
        onClick={() => setIsOn(!isOn)}
      >
        <div
          className={`w-4 h-4 bg-white rounded-full shadow-md transform transition-transform ${
            isOn ? "translate-x-5" : "translate-x-0"
          }`}
        ></div>
      </div>
    </div>
  );
}
