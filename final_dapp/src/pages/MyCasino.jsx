import { useState, useEffect } from "react";
import TopNav from "../components/Navigations/TopNav";
import Main from "../components/Main/Main";
import AccountCard from "../components/accountsData/AccountCard";
import { web3, contract } from "../utils/interactiveWeb3Engine";
import { FaEthereum } from "react-icons/fa";

const MyCasino = () => {
  const [contractData, setContractData] = useState(null);
  const [message, setMessage] = useState("");
  const [value, setValue] = useState("");
  const [alert, setAlert] = useState(false);
  const [heading, setHeading] = useState("");
  const [wheelStyle, setWheelStyle] = useState({
    transform: `rotate(${value}deg)`,
  });
  const [successAlert, setSuccessAlert] = useState(false);
  let [mySpins, setMySpins] = useState([]);
  async function fetchData() {
    // const web3 = new Web3(Web3.givenProvider || "http://localhost:8545");
    // const contractAddress = "0x5B29C33685b1EED9743763c935bd2Ba1DE155940";

    // const contract = new web3.eth.Contract(abi, contractAddress);
    try {
      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });
      const account = accounts[0];
      const data = await contract.methods.getArraySpins(account).call();
      const formattedData = [];
      for (let i = 0; i < data.length; i++) {
        formattedData.push({
          betId: data[i]["betId"],
          betResult: data[i]["betResult"],
          possiblePayout: data[i]["possiblePayout"],
          betWithdrawn: data[i]["withdrawn"],
        });
      }
      setContractData(formattedData);
    } catch (error) {
      console.log(error.message);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);
  console.log(contractData);

  const claimTokens = (e) => {
    let gameId = e.target.value;
    console.log(e.target.value);
    claimWonTokens(gameId.toString())
      .then((data) => {
        setHeading("Claim successful");
        setMessage("Successfully claimed, check you account");
        fetchData();
        setSuccessAlert(true);
      })
      .catch((e) => {
        console.log(e);
        let m = e.message;
        console.log(m.substr(135, 135));
        if (m.indexOf("revert allready withdrew funds") > 0) {
          setHeading("Funds allready claimed");
          setMessage(
            "you must have withdrawn this claim, please claim another or bet again to win more"
          );
          setAlert(true);
        } else {
          setHeading("Claim Error");
          setMessage(
            "We apologise for the inconveniences, please check back later"
          );
          setAlert(true);
        }
      });
  };
  return (
    <>
      <TopNav />
      <br />
      <br />
      <Main>
        <div className="w3-col l3">
          <AccountCard />
        </div>
        <div className="w3-col l7 w3-padding">
          <h3 className="w3-text-white">MyCasino</h3>
          <table className="w3-table w3-responsive w3-text-white w3-padding">
            <thead>
              <tr style={{ borderBottom: "1px solid #555" }}>
                <th>Bet Id</th>
                <th>result</th>
                <th>Amount</th>
                <th>action</th>
              </tr>
            </thead>

            <tbody>
              {contractData &&
                contractData.map(
                  ({
                    betId,
                    betResult,
                    deposit,
                    gamingOdds,
                    possiblePayout,
                    timeStamp,
                    betWithdrawn,
                  }) => (
                    <tr
                      key={timeStamp}
                      style={{ borderBottom: "1px solid #555" }}
                    >
                      <td>{betId}</td>
                      <td>
                        <span className="w3-tag w3-green w3-round-xlarge">
                          {betResult}
                        </span>
                      </td>
                      <td>
                        {web3.utils.fromWei(possiblePayout, "ether")}
                        <FaEthereum />
                      </td>
                      <td>
                        {betWithdrawn == true ? (
                          "Claimed"
                        ) : (
                          <button
                            className="w3-btn w3-padding-small"
                            style={{ backgroundColor: "#3f410c" }}
                            onClick={claimTokens}
                            value={betId}
                          >
                            Claim
                          </button>
                        )}
                      </td>
                    </tr>
                  )
                )}
            </tbody>
          </table>
        </div>
      </Main>
    </>
  );
};

export default MyCasino;
