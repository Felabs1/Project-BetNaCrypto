import React from "react";

const SportsNav = ({
  navName,
  midLabel1,
  midLabel2,
  midLabel3,
  endLabel1,
  endLabel2,
  endLabel3,
}) => {
  return (
    <div
      className="w3-container w3-text-white w3-padding"
      style={{ backgroundColor: "#333333", marginTop: "2px" }}
    >
      <div style={{ display: "flex" }}>
        <div style={{ flex: 5 }}>
          <span>{navName}</span>
        </div>
        <div style={{ flex: 3, display: "flex" }}>
          <div
            style={{
              flex: 1,
              alignSelf: "center",
              alignItems: "center",
              alignContent: "center",
            }}
          >
            1
          </div>
          <div style={{ flex: 1 }}>x</div>
          <div style={{ flex: 1 }}>2</div>
        </div>
        <div style={{ flex: 3, display: "flex" }} className="w3-hide-small">
          <div style={{ flex: 1 }}>{midLabel1}</div>
          <div style={{ flex: 1 }}>{midLabel2}</div>
          <div style={{ flex: 1 }}>&nbsp;</div>
        </div>
        <div style={{ flex: 3, display: "flex" }} className="w3-hide-small">
          <div style={{ flex: 1 }}>{endLabel1}</div>
          <div style={{ flex: 1 }}>{endLabel2}</div>
          <div style={{ flex: 1 }}>&nbsp;</div>
        </div>
      </div>
    </div>
  );
};

export default SportsNav;
