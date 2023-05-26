import React from "react";
import mbappe from "../../images/peakpx.jpg";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Wallpaper = () => {
  return (
    <>
      <div
        className="wallpaper"
        style={{
          backgroundImage: `url("${mbappe}")`,
          backgroundPosition: "top",
          backgroundSize: "cover",
        }}
      >
        <div className="overlay">
          <div className="w3-center">
            <br />
            <br />
            <br />
            <h1 className="w3-text-white" style={{ fontWeight: "bold" }}>
              Bet and win with{" "}
              <span style={{ fontWeight: "bold" }} className="w3-text-yellow">
                BetNaKrypto
              </span>
              <br />
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Wallpaper;
