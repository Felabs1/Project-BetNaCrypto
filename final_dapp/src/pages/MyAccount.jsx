import Main from "../components/Main/Main";

import TopNav from "../components/Navigations/TopNav";

import AccountCard from "../components/accountsData/AccountCard";

import DisplayAccount from "../components/accountsData/DisplayAccount";

const MyAccount = () => {
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
                <DisplayAccount />
              </div>
            </div>
          </div>
        </div>
        <h2>hello</h2>
        <h2>hello</h2>
        <h2>hello</h2>
        <h2>hello</h2>
        <h2>hello</h2>
        <h2>hello</h2>
        <h2>hello</h2>
        <h2>hello</h2>
        <h2>hello</h2>
        <h2>hello</h2>
        <h2>hello</h2>
        <h2>hello</h2>
        <h2>hello</h2>
      </Main>
    </>
  );
};

export default MyAccount;
