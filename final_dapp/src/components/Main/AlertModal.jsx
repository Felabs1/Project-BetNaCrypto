import React from "react";
import { FaDiagnoses, FaInfo, FaTrophy } from "react-icons/fa";

const AlertModal = ({ message, heading, type, onHandleCloseAlert }) => {
  return (
    <div className="w3-modal" style={{ display: "block" }}>
      <div
        className="w3-modal-content w3-animate-top w3-auto w3-round w3-card-4"
        style={{ width: "40rem", zIndex: "100" }}
      >
        <div className="w3-container">
          <h3 className={type == "error" ? `w3-text-red` : "w3-text-blue"}>
            {type == "error" ? (
              <FaDiagnoses />
            ) : (
              <FaTrophy style={{ color: "#ffffff" }} />
            )}

            {heading}
          </h3>
          <hr />
          <p>{message}</p>
          <button
            className={`w3-btn ${
              type == "error" ? `w3-red` : "w3-blue"
            } w3-right w3-round`}
            onClick={onHandleCloseAlert}
          >
            Okay
          </button>
          <br />
          <br />
        </div>
      </div>
    </div>
  );
};

export default AlertModal;
