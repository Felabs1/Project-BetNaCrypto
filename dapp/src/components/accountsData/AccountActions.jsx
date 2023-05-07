import { useState } from "react";
import {
  FaUser,
  FaCaretUp,
  FaCaretDown,
  FaFutbol,
  FaEthereum,
} from "react-icons/fa";
import UserAccountsAccountsData from "./UserAccountsAccountsData";
import UserFunctionAccordionHeading from "./UserFunctionAccordionHeading";

const AccountActions = () => {
  const [personalDataOpen, setPersonalDataOpen] = useState(false);
  const [myBetsOpen, setMyBetsOpen] = useState(false);
  const [myTransactionsOpen, setMyTransactionsOpen] = useState(false);
  const openUserAccountsData = (accordionToOpen) => {
    setPersonalDataOpen(!personalDataOpen);
  };

  const openMyBetsData = () => {
    setMyBetsOpen(!myBetsOpen);
  };

  const openMyTransactions = () => {
    setMyTransactionsOpen(!myTransactionsOpen);
  };

  return (
    <div className="w3-container w3-text-white">
      <div>
        <span className="w3-large" style={{ fontWeight: "bold" }}>
          My Profile
        </span>
        <div className="w3-container" style={{ backgroundColor: "#101010" }}>
          <UserFunctionAccordionHeading
            onClick={openUserAccountsData}
            heading="PersonalData"
            iconData={<FaUser />}
            caretIconData={personalDataOpen ? <FaCaretUp /> : <FaCaretDown />}
          />
          {personalDataOpen && (
            <UserAccountsAccountsData
              NavData={["Personal Data", "Account Verification"]}
            />
          )}

          <UserFunctionAccordionHeading
            heading="My Bets"
            onClick={openMyBetsData}
            iconData={<FaFutbol />}
            caretIconData={myBetsOpen ? <FaCaretUp /> : <FaCaretDown />}
          />

          {myBetsOpen && (
            <UserAccountsAccountsData NavData={["Casino", "Normal Bets"]} />
          )}

          <UserFunctionAccordionHeading
            heading="My Transactions"
            onClick={openMyTransactions}
            iconData={<FaEthereum />}
            caretIconData={myTransactionsOpen ? <FaCaretUp /> : <FaCaretDown />}
          />

          {myTransactionsOpen && (
            <UserAccountsAccountsData NavData={["My Transactions"]} />
          )}

          <br />
        </div>
      </div>
    </div>
  );
};

export default AccountActions;
