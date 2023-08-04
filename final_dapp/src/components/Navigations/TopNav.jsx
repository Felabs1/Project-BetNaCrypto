import React from "react";
import { topNavData } from "../../utils/prototypeData";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Web3 from "web3";
import { FaBars, FaDollarSign } from "react-icons/fa";
import Betslip from "../SportsAndTeams/Betslip";
import { myNiceBets } from "../../utils/prototypeData";
import { isLoggedIn } from "../../utils/interactiveWeb3Engine";

// import { connectMetamask } from "../../utils/web3Engine";

const TopNav = () => {
  const [accountDetails, setAccountDetails] = useState();
  const [web3, setWeb3] = useState(null);
  const [accounts, setAccounts] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [betSlipModal, setBetSlipModal] = useState(false);
  const [myBets, setMyBets] = useState({});
  const openNavigation = () => {
    setModalOpen(true);
  };

  const handleRemoveBet = (e) => {
    delete myNiceBets[e.target.value];
    setMyBets((previousState) => {
      return { previousState, ...myNiceBets };
    });
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const openBetSlipModal = () => {
    setBetSlipModal(true);
  };

  useEffect(() => {
    async function testLogin() {
      const loggedin = await isLoggedIn();
      setAccounts(loggedin);
      console.log(accounts);
    }
    testLogin();
  }, []);

  async function connectMetamask() {
    try {
      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });
      const account = accounts[0];
      setAccountDetails(account);
    } catch (error) {
      if (error.message.includes("ethereum is not defined")) {
        alert("you need to install a wallet preferably metamask to continue");
      }
    }
  }
  console.log(myNiceBets);

  const handleCloseBetModal = () => {
    setBetSlipModal(false);
  };
  return (
    <>
      {betSlipModal && (
        <div
          id="id01"
          className="w3-modal"
          style={{
            display: "block",
          }}
        >
          <div className="w3-modal-content">
            <span
              onClick={handleCloseBetModal}
              class="w3-btn w3-display-topright"
            >
              &times;
            </span>
            <Betslip onRemoveBet={handleRemoveBet} myBets={myNiceBets} />
          </div>
        </div>
      )}
      {modalOpen && (
        <div
          id="id01"
          className="w3-modal"
          style={{
            display: "block",
          }}
        >
          <div
            className="w3-modal-content sidebar-color"
            style={{
              height: "100%",
              width: "100%",
              margin: "0px",
              padding: "0px",
            }}
          >
            <div className="w3-container w3-text-white">
              <span
                onClick={handleCloseModal}
                className="w3-btn w3-display-topright"
              >
                &times;
              </span>
              <ul className="w3-ul">
                {topNavData &&
                  topNavData.map((coolNav) => (
                    <li>
                      <Link
                        style={{ cursor: "pointer", textDecoration: "none" }}
                        link={coolNav}
                        key={coolNav}
                        className="w3-hover-text-red w3-text-white"
                        to={"/" + coolNav}
                      >
                        {coolNav}
                      </Link>
                    </li>
                  ))}
                <br />
                <div className="user">
                  {accounts ? (
                    <button
                      className="w3-btn w3-hover-text-yellow w3-round-large w3-block"
                      style={{
                        backgroundColor: "#3f410c",
                        margin: "4px 4px",

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
              </ul>
            </div>
          </div>
        </div>
      )}
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

        <div className="w3-small w3-third w3-hide-small navs">
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
        <div className="w3-text-white w3-padding w3-hide-medium w3-hide-large">
          <span
            className="w3-tag w3-round w3-yellow"
            onClick={openBetSlipModal}
          >
            BetSlip {Object.values(myNiceBets).length}
          </span>
        </div>
        <div
          className="w3-text-white w3-padding w3-hide-medium w3-hide-large"
          onClick={openNavigation}
        >
          <FaBars />
        </div>
        <div className="user w3-hide-small">
          {accounts == true ? (
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
          ) : accounts == false ? (
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
      <div
        className="w3-bar w3-responsive w3-hide-medium w3-text-white w3-hide-large w3-padding w3-padding w3-bottom"
        style={{ backgroundColor: "#090909", overflowX: "auto" }}
      >
        {topNavData.map((coolNav) => {
          return (
            <Link
              style={{ cursor: "pointer", textDecoration: "none" }}
              link={coolNav}
              key={coolNav}
              className="w3-bar-item w3-small w3-hover-text-red w3-text-white"
              to={"/" + coolNav}
            >
              {coolNav}
            </Link>
          );
        })}
        <div className="w3-small">
          {accounts == true ? (
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
          ) : accounts == false ? (
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
              Login
              {/* <Link to="/profile" style={{ textDecoration: "none" }}>
              Connect Wallet
            </Link> */}
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
              Login
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
