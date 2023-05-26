import React from "react";
import { Link } from "react-router-dom";
import { navDataAfterWallpaper } from "../../utils/prototypeData";

const BarAfterWallpaper = () => {
  return (
    <>
      <div
        className="w3-container w3-hide-small"
        style={{ backgroundColor: "#151515" }}
      >
        {navDataAfterWallpaper.map((nav) => {
          return (
            <Link
              to={"/" + nav.name}
              key={nav.name}
              className="w3-bar-item w3-left-align w3-hover-text-red w3-hover-none w3-text-white w3-button w3-small"
            >
              {nav.name} {nav.icon}
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default BarAfterWallpaper;
