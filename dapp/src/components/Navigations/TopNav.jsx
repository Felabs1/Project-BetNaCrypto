import React from "react";
import { topNavData } from "../../utils/prototypeData";
import { Link } from "react-router-dom";
import { useState } from "react";
// import { connectMetamask } from "../../utils/web3Engine";

const TopNav = () => {
  const [accountDetails, setAccountDetails] = useState();

  async function connectMetamask() {
    const accounts = await ethereum.request({ method: "eth_requestAccounts" });
    const account = accounts[0];
    setAccountDetails(account);
  }
  return (
    <>
      <div
        className="w3-bar w3-top custom-nav"
        style={{ backgroundColor: "#000000" }}
      >
        <div
          style={{ fontWeight: "bold" }}
          className="w3-large custom-logo w3-bar-item w3-text-white"
        >
          BetNaKrypto
        </div>

        <div className="w3-small w3-third navs">
          {topNavData.map((coolNav) => {
            return (
              <Link
                style={{ cursor: "pointer", textDecoration: "none" }}
                link={coolNav}
                key={coolNav}
                className="w3-bar-item w3-hover-text-red w3-text-white"
                to={"/" + coolNav}
              >
                {coolNav}
              </Link>
            );
          })}
        </div>
        <div className="user">
          {accountDetails ? (
            <button
              className="w3-btn w3-hover-text-yellow w3-round-large w3-bar-item"
              style={{
                backgroundColor: "#3f410c",
                margin: "4px 4px",
                padding: "4px",
                color: "#8d920d",
              }}
            >
              <Link to="/profile" style={{ textDecoration: "none" }}>
                My Profile
              </Link>
            </button>
          ) : (
            <button
              className="w3-btn w3-hover-text-yellow w3-round-large w3-bar-item"
              style={{
                backgroundColor: "#3f410c",
                margin: "4px 4px",
                padding: "4px",
                color: "#8d920d",
              }}
              onClick={connectMetamask}
            >
              Connect Wallet
              {/* <Link to="/profile" style={{ textDecoration: "none" }}>
              Connect Wallet
            </Link> */}
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default TopNav;
