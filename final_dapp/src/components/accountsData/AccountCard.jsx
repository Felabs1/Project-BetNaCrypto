import { useState } from "react";
import { useEffect } from "react";
import {
  FaEye,
  FaClipboard,
  FaPaperclip,
  FaEthereum,
  FaSignOutAlt,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { getAccountDetails } from "../../utils/web3Engine";
const AccountCard = () => {
  const [accountsDetails, setAccountDetails] = useState({});

  const handleLogOut = () => {
    alert("please log out of metamask manually");
  };

  useEffect(() => {
    const a = getAccountDetails();
    a.then((data) => setAccountDetails(data));
  }, [getAccountDetails]);

  console.log(accountsDetails);
  return (
    <>
      <div className="w3-container account-card-div">
        <div className="w3-text-white w3-padding">
          <span className="w3-left">
            {Object.entries(accountsDetails).length > 0
              ? accountsDetails.accountAddress.slice(0, 5)
              : ""}
            <span className="w3-tiny">...</span>
            {Object.entries(accountsDetails).length > 0
              ? accountsDetails.accountAddress.slice(-6)
              : ""}{" "}
            <FaPaperclip />
          </span>
          <span className="w3-right">
            <a>
              <FaEye />
            </a>
            &nbsp;
            <a>
              <FaClipboard />
            </a>
          </span>
        </div>
        <br />
        <div className="w3-text-white w3-padding">
          <b>
            <FaEthereum className="w3-large" />
            <span className="w3-large">{accountsDetails["balance"]}</span>
            <br />
            <span className="w3-small">Balance</span>
          </b>
          <br />
          <Link
            to="/profile/my-transactions"
            className="w3-btn view-transaction-button w3-hover-text-yellow"
          >
            View Transactions
          </Link>
          <br />
          <br />
        </div>
      </div>
      <div
        className="w3-container sign-out-button w3-text-white"
        style={{ backgroundColor: "#1b1b1b" }}
      >
        <button
          onClick={handleLogOut}
          className="w3-btn w3-hover-text-yellow w3-hover-none"
        >
          <FaSignOutAlt /> Log Out
        </button>
      </div>
    </>
  );
};

export default AccountCard;
