import Main from "../components/Main/Main";
import TopNav from "../components/Navigations/TopNav";

import AccountCard from "../components/accountsData/AccountCard";
import VerifyForm from "../components/accountsData/VerifyForm";

const VerifyAccount = () => {
  return (
    <>
      <TopNav />
      <br />
      <br />
      <Main>
        <div className="w3-col l3">
          <AccountCard />
        </div>
        <div className="w3-col l7">
          <div className="w3-container w3-text-white">
            <div>
              <span className="w3-large" style={{ fontWeight: "bold" }}>
                My Profile
              </span>
              <div
                className="w3-container"
                style={{ backgroundColor: "#101010" }}
              >
                <VerifyForm />
              </div>
            </div>
          </div>
        </div>
      </Main>
    </>
  );
};

export default VerifyAccount;
