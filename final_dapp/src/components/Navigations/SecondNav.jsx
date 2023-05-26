import React from "react";
import {
  updateSecondBarData,
  getSecondBarData,
} from "../../utils/prototypeData";
import { Link } from "react-router-dom";

const SecondNav = ({ onSearch }) => {
  console.log(getSecondBarData());
  return (
    <>
      <div
        className="w3-bar w3-hide-small second-bar"
        style={{ position: "fixed", zIndex: "6" }}
      >
        <input
          type="text"
          className="w3-bar-item w3-text-grey"
          placeholder="search"
          onChange={onSearch}
          style={{
            width: "300px",
            backgroundColor: "transparent",
            border: "1px solid #1b1b1b",
            marginLeft: "15px",
          }}
        />
        <div className="w3-small w3-text-white">
          <a className="w3-bar-item w3-hover-text-red">Highlights</a>
          {getSecondBarData().map(({ day, date }) => (
            <Link
              to={date.toString()}
              className="w3-bar-item w3-hover-text-red"
              key={date}
            >
              {day}
            </Link>
          ))}
        </div>
        <div className="w3-right">
          <a
            className="w3-bar-item w3-text-white w3-small w3-border w3-border-white w3-round-large"
            style={{ padding: "5px", marginTop: "2px", marginRight: "10px" }}
          >
            EN
          </a>
        </div>
      </div>
    </>
  );
};

export default SecondNav;
