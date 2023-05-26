import { useState, useEffect } from "react";
import { FaEthereum, FaEye } from "react-icons/fa";
import AccountCard from "../components/accountsData/AccountCard";
import Main from "../components/Main/Main";
import TopNav from "../components/Navigations/TopNav";
import { contract, web3 } from "../utils/interactiveWeb3Engine";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "./mybets.css";

const MyBets = ({ transactions, history }) => {
  const [contractData, setContractData] = useState(null);

  const openBetDetails = (userid) => {
    history.push(`/transaction/${userid}`);
  };
  useEffect(() => {
    async function showMyBets() {
      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });
      const account = accounts[0];
      const data = await contract.methods.viewTrackedBets(account).call();
      // console.log(data);
      const formattedData = [];
      for (let i = 0; i < data.length; i++) {
        formattedData.push({
          betId: data[i]["betId"],
          betFinished: data[i]["betFinished"],
          possiblePayout: data[i]["possiblePayout"],
          betWon: data[i]["betWon"],
          deposit: data[i]["deposit"],
        });
      }
      setContractData(formattedData);
    }
    showMyBets();
  }, []);

  const claimWonBets = async (e) => {
    console.log(e.target.value);
    const accounts = await ethereum.request({
      method: "eth_requestAccounts",
    });
    const account = accounts[0];
    const a = await contract.methods
      .withdrawWinnings(e.target.value)
      .send({ from: account, gasLimit: "1000000" })
      .then((data) => {
        console.log(data);
        toast("successfuly claimed");
      });
  };

  const goToLink = (e) => {
    console.log(e);
  };
  console.log(contractData);
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
                My Bets
              </span>
              <div
                className="w3-padding"
                style={{ backgroundColor: "#101010" }}
              >
                <table className="w3-table w3-responsive w3-text-white w3-padding">
                  <thead>
                    <tr style={{ borderBottom: "1px solid #555" }}>
                      <th>Bet Id</th>
                      <th>result</th>
                      <th>Deposit</th>
                      <th>Payout</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {contractData &&
                      contractData.map(
                        ({
                          betId,
                          betWon,
                          deposit,
                          possiblePayout,
                          betFinished,
                        }) => {
                          return (
                            <tr style={{ borderBottom: "1px solid #555" }}>
                              <td>{betId}</td>
                              <td>
                                {betWon == true && betFinished == true ? (
                                  <span className="w3-tag w3-small w3-round w3-green">
                                    won
                                  </span>
                                ) : betWon == false && betFinished == false ? (
                                  <span className="w3-tag w3-small w3-round w3-blue">
                                    pending
                                  </span>
                                ) : (
                                  <span className="w3-tag w3-small w3-round w3-red">
                                    Lost
                                  </span>
                                )}
                              </td>
                              <td>
                                {web3.utils.fromWei(deposit, "ether")}{" "}
                                <FaEthereum />
                              </td>
                              <td>
                                {web3.utils.fromWei(possiblePayout, "ether")}
                                <FaEthereum />
                              </td>
                              <td>
                                {betWon == true ? (
                                  <span>
                                    <button
                                      className="w3-btn w3-padding-small w3-small"
                                      style={{ backgroundColor: "#3f410c" }}
                                      value={betId}
                                      onClick={claimWonBets}
                                    >
                                      Claim
                                    </button>
                                    &nbsp;
                                    <Link
                                      className="w3-btn w3-padding-small w3-small"
                                      style={{
                                        border: "1px solid #3f410c",
                                        color: "#8d920d",
                                      }}
                                      to={`/profile/Normal%20Bets/${betId}`}
                                    >
                                      View <FaEye />
                                    </Link>
                                  </span>
                                ) : (
                                  <Link
                                    className="w3-btn w3-padding-small w3-small"
                                    style={{
                                      border: "1px solid #3f410c",
                                      color: "#8d920d",
                                    }}
                                    to={`/profile/Normal%20Bets/${betId}`}
                                  >
                                    View <FaEye />
                                  </Link>
                                )}
                              </td>
                            </tr>
                          );
                        }
                      )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </Main>
    </>
  );
};

export default MyBets;
