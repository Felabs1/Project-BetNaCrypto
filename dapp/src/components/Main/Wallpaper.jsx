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
            <h1 className="w3-text-white" style={{ fontWeight: "bold" }}>
              <i>
                April 8<sup>th</sup>
              </i>
              <br />
            </h1>
            <h2 className="w3-text-white">18:00 GMT</h2>
          </div>
          <div
            style={{ display: "flex", marginBottom: "5px" }}
            className="w3-bar w3-border-top w3-border-bottom w3-border-white"
          >
            <div className="w3-left" style={{ flex: 1 }}>
              <button className="w3-bar-item w3-text-white w3-button">
                <FaArrowLeft />
              </button>
            </div>
            <div
              className="w3-center w3-small w3-text-white"
              style={{ flex: 6, display: "flex" }}
            >
              <button
                className="w3-bar-item w3-border-right w3-button"
                style={{ flex: 1 }}
              >
                PARIS SAINT GERMAIN&nbsp;&nbsp;<b>1.23</b>
              </button>

              <button
                className="w3-bar-item w3-button w3-border-none"
                style={{ flex: 1 }}
              >
                DRAW&nbsp;&nbsp;<b>3.23</b>
              </button>

              <button
                className="w3-bar-item w3-button w3-border-left"
                style={{ flex: 1 }}
              >
                LIVERPOOL&nbsp;&nbsp;<b>5.23</b>
              </button>
            </div>
            <div className="w3-right" style={{ flex: 1 }}>
              <button className="w3-button w3-bar-item w3-text-white w3-right">
                <FaArrowRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Wallpaper;
