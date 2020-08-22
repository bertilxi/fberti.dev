import React, { FC, useState, useLayoutEffect, useCallback } from "react";
import { mdiWhiteBalanceSunny, mdiWeatherNight } from "@mdi/js";
import Icon from "./Icon";

const DarkMode: FC = () => {
  const [lightMode, setLightMode] = useState(
    localStorage.getItem("light-mode") === "true"
  );

  useLayoutEffect(() => {
    if (lightMode) {
      document
        .getElementsByTagName("body")
        .item(0)
        ?.classList.add("light-mode");
    } else {
      document
        .getElementsByTagName("body")
        .item(0)
        ?.classList.remove("light-mode");
    }
  }, [lightMode]);

  const toggle = useCallback(() => {
    const mode = !lightMode;
    setLightMode(mode);
    localStorage.setItem("light-mode", JSON.stringify(mode));
  }, [lightMode]);

  return (
    <button
      className="bg-gray-700 text-yellow-500 h-8 w-8 p-1 rounded-full"
      onClick={toggle}
    >
      {lightMode ? (
        <Icon src={mdiWeatherNight} title="Set Dark Mode" />
      ) : (
        <Icon src={mdiWhiteBalanceSunny} title="Set Light Mode" />
      )}
    </button>
  );
};

export default DarkMode;
