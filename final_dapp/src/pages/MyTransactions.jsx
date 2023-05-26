import { useState, useEffect } from "react";
import { FaEthereum, FaEye } from "react-icons/fa";
import AccountCard from "../components/accountsData/AccountCard";
import Main from "../components/Main/Main";
import TopNav from "../components/Navigations/TopNav";
import { contract, web3 } from "../utils/web3Engine";
import { Link } from "react-router-dom";
import "./mybets.css";

const MyTransactions = () => {
  const [events, setEvents] = useState([]);
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        // Retrieve the events for a specific account address
        const accounts = await ethereum.request({
          method: "eth_requestAccounts",
        });
        const account = accounts[0];
        const events = await contract.getPastEvents("PlaceBet", {
          filter: { sender: account },
          fromBlock: 0,
          toBlock: "latest",
        });
        setEvents(events);
      } catch (error) {
        console.error(error);
      }
    };

    fetchEvents();
  }, []);

  const goToLink = (e) => {
    console.log(e);
  };
  console.log(events);
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
                My Transactions
              </span>
              <div
                className="w3-padding"
                style={{ backgroundColor: "#101010" }}
              >
                <table className="w3-table">
                  <thead>
                    <tr>
                      <th>Transaction Hash</th>
                      <th>From</th>
                      <th>To</th>
                      <th>Value</th>
                    </tr>
                  </thead>
                  <tbody>
                    {events &&
                      events.map((value) => {
                        return (
                          <tr>
                            <td>{value.id}</td>
                            <td>
                              {value.returnValues["customer"].slice(0, 5)}...
                              {value.returnValues["customer"].slice(-6)}
                            </td>
                            <td>
                              {value.address.slice(0, 5)}...
                              {value.address.slice(-6)}
                            </td>
                            <td>
                              {web3.utils.fromWei(
                                value.returnValues["deposit"],
                                "ether"
                              )}{" "}
                              ETH
                            </td>
                          </tr>
                        );
                      })}
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

export default MyTransactions;
