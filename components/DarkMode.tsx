import React, { FC, useState, useLayoutEffect, useCallback } from "react";
import { mdiWhiteBalanceSunny, mdiWeatherNight } from "@mdi/js";
import Icon from "@mdi/react";

const DarkMode: FC = () => {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("dark-mode") === "true"
  );

  useLayoutEffect(() => {
    if (darkMode) {
      document.querySelector("html").classList.add("dark");
    } else {
      document.querySelector("html").classList.remove("dark");
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
        <Icon path={mdiWhiteBalanceSunny} size={1} title="Set Light Mode" />
      ) : (
        <Icon path={mdiWeatherNight} size={1} title="Set Dark Mode" />
      )}
    </button>
  );
};

export default DarkMode;
