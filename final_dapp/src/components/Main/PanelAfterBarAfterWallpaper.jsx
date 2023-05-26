import React from "react";

const PanelAfterBarAfterWallpaper = () => {
  return (
    <>
      <div
        className="w3-container"
        style={{ backgroundColor: "#323232", fontWeight: "bold" }}
      >
        <h5 className="w3-text-white">today, Best moments</h5>
        <div style={{ display: "flex" }}>
          <div
            className="w3-card w3-margin-right w3-round-large w3-padding w3-text-white"
            style={{ backgroundColor: "#208d4d" }}
          >
            <h6>Just a panel</h6>
          </div>
          <div
            className="w3-card w3-round-large w3-padding w3-text-white"
            style={{ backgroundColor: "#208d4d" }}
          >
            <h6>Just a panel</h6>
          </div>
        </div>
        <br />
      </div>
    </>
  );
};

export default PanelAfterBarAfterWallpaper;
