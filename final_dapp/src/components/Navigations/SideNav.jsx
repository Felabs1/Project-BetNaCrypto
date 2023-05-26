import React from "react";
import { Link, useParams } from "react-router-dom";
import { navDataAfterWallpaper } from "../../utils/prototypeData";
const SideNav = () => {
  return (
    <>
      <div className="w3-sidebar w3-hide-small sidebar-color">
        <br />
        <br />
        <br />
        {navDataAfterWallpaper.map((sidedata) => {
          return (
            <Link
              to={"/" + sidedata.name}
              key={sidedata.name}
              className="w3-bar-item w3-padding w3-hover-text-red w3-text-white w3-block"
            >
              {sidedata.icon}
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default SideNav;
