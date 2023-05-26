import { useState, useEffect } from "react";
import { FaEthereum, FaEye } from "react-icons/fa";
import AccountCard from "../components/accountsData/AccountCard";
import Main from "../components/Main/Main";
import TopNav from "../components/Navigations/TopNav";
import { contract, web3 } from "../utils/web3Engine";
import { Link, useParams } from "react-router-dom";
import "./mybets.css";

const BetDetails = ({ transactions, history }) => {
  const [contractData, setContractData] = useState(null);
  const params = useParams();

  const betId = params.myBets;
  console.log(betId);

  const openBetDetails = (userid) => {
    history.push(`/transaction/${userid}`);
  };
  useEffect(() => {
    async function showMyBets() {
      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });
      const account = accounts[0];
      const data = await contract.methods.viewNormalBets(account, betId).call();
      //   console.log(data);
      const formattedData = [];
      for (let i = 0; i < data.length; i++) {
        formattedData.push({
          category: data[i]["category"],
          matchId: data[i]["matchId"],
          outcome: data[i]["outcome"],
          pick: data[i]["pick"],
          teamNames: data[i]["teamNames"],
          won: data[i]["won"],
        });
      }
      setContractData(formattedData);
    }
    showMyBets();
  }, []);

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
                Bet Details
              </span>
              <div
                className="w3-padding"
                style={{ backgroundColor: "#101010" }}
              >
                <ul className="w3-ul">
                  {contractData &&
                    contractData.map(
                      ({
                        category,
                        matchId,
                        outcome,
                        pick,
                        teamNames,
                        won,
                      }) => {
                        return (
                          <li
                            style={{ borderBottom: "1px solid #555" }}
                            className="w3-padding"
                          >
                            <span>{teamNames}</span>
                            <span
                              className={`w3-right w3-small ${
                                won == true && outcome !== "pending"
                                  ? "w3-text-green"
                                  : won == false && outcome == "pending"
                                  ? "w3-text-blue"
                                  : "w3-text-red"
                              }`}
                            >
                              {won == true && outcome !== "pending"
                                ? "won"
                                : won == false && outcome == "pending"
                                ? "pending"
                                : "lost"}
                            </span>
                            <br />
                            <span>
                              category ({category}) &nbsp;&nbsp;pick ({pick})
                            </span>
                            &nbsp;&nbsp;&nbsp;
                            <span className="w3-right">
                              Outcome ({outcome})
                            </span>
                          </li>
                        );
                      }
                    )}
                </ul>
                <br />
                {/* <button
                  className="w3-btn"
                  style={{ border: "1px solid #3f410c", color: "#8d920d" }}
                >
                  Reverify
                </button> */}
              </div>
            </div>
          </div>
        </div>
      </Main>
    </>
  );
};

export default BetDetails;
