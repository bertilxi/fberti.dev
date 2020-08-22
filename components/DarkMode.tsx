import React, { FC, useState, useLayoutEffect, useCallback } from "react";
import { mdiWhiteBalanceSunny, mdiWeatherNight } from "@mdi/js";
import Icon from "./Icon";

const DarkMode: FC = () => {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("dark-mode") === "true"
  );

  useLayoutEffect(() => {
    if (darkMode) {
      document.getElementsByTagName("body").item(0)?.classList.add("dark-mode");
    } else {
      document
        .getElementsByTagName("body")
        .item(0)
        ?.classList.remove("dark-mode");
    }
  }, [darkMode]);

  const toggle = useCallback(() => {
    const mode = !darkMode;
    setDarkMode(mode);
    localStorage.setItem("dark-mode", JSON.stringify(mode));
  }, [darkMode]);

  return (
    <button
      className="bg-gray-700 text-yellow-500 h-8 w-8 p-1 rounded-full"
      onClick={toggle}
    >
      {darkMode ? (
        <Icon src={mdiWhiteBalanceSunny} title="Set Light Mode" />
      ) : (
        <Icon src={mdiWeatherNight} title="Set Dark Mode" />
      )}
    </button>
  );
};

export default DarkMode;
