import { useRef } from "react";
import TopNav from "../components/Navigations/TopNav";
import Main from "../components/Main/Main";
import styles from "./Casino.module.css";
import { useState, useEffect } from "react";
import Web3 from "web3";
import { FaEthereum } from "react-icons/fa";
import {
  SpinDatTing,
  getAccountSpins,
  web3,
  contract,
} from "../utils/web3Engine";
import { abi } from "../assets/abi";
import { claimWonTokens } from "../utils/interactiveWeb3Engine";
import AlertModal from "../components/Main/AlertModal";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Casino = () => {
  console.log(web3.eth);
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

  const wheelRef = useRef(null);
  const stakeAmount = useRef();

  const handleCasinoSpin = () => {
    const newValue = value + Math.ceil(Math.random() * 3600);
    setValue(newValue);
    console.log(newValue);
    setWheelStyle({ transform: `rotate(${newValue}deg)` });
  };

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

  const placeBet = (e) => {
    e.preventDefault();
    const v = stakeAmount.current.value;
    if (v == "") {
      setHeading("Input Error");
      setMessage("please enter a value before staking");
      setAlert(true);
      return;
    }
    handleTransitionEnd();
  };

  const handleTransitionEnd = () => {
    const v = stakeAmount.current.value;
    const currentRotation = wheelRef.current.style.transform;
    const currentRotationValue = currentRotation
      ? parseInt(currentRotation.replace("rotate(", "").replace("deg)", ""), 10)
      : 0;
    const angle = ((currentRotationValue % 360) + 360) % 360; // normalize angle to 0-359
    const prices = ["x20", "x0.2", "x2", "x0.5", "x10", "x0", "x2.5", "x0.1"];
    const odds = ["20", "0.2", "2", "0.5", "10", "0", "2.5", "0.1"];
    const index = Math.floor(angle / 45); // divide circle into 10 equal parts of 36 degrees each

    async function spin() {
      await SpinDatTing("won " + prices[index], odds[index], v).then((data) => {
        setValue(prices[index]);
        setMessage("you Won " + prices[index]);
        setSuccessAlert(true);
        fetchData();
        setValue("");
        stakeAmount.current.value = "";
        console.log(prices[index]);

        // Start the wheel spinning here or call a function to start it
        handleCasinoSpin();
      });
    }
    // SpinDatTing("won " + prices[index], odds[index], v)
    //   .then((data) => {
    //     setValue(prices[index]);
    //     setMessage("you Won " + prices[index]);
    //     setSuccessAlert(true);
    //     fetchData();
    //     setValue("");
    //     stakeAmount.current.value = "";
    //     console.log(prices[index]);

    //     // Start the wheel spinning here or call a function to start it
    //     handleCasinoSpin();
    //   })
    // .catch((error) => {
    //   // Handle any error that occurred during the SpinDatTing function
    //   console.error("Error in SpinDatTing:", error);
    // });

    toast.promise(spin(), {
      pending: {
        render() {
          return "creating Draw...";
        },
        icon: false,
      },
      success: {
        render({ data }) {
          return `You won`;
        },
        // other options
        icon: "🟢",
      },
      error: {
        render({ data }) {
          return "some error occured";
          // console.log(data);
        },
      },
    });
  };
  return (
    <>
      <ToastContainer />
      <TopNav />
      {alert && (
        <AlertModal
          heading={heading}
          message={message}
          type="error"
          onHandleCloseAlert={() => {
            setAlert(false);
          }}
        />
      )}

      {successAlert && (
        <AlertModal
          heading="CONGRATULATIONS"
          message={message}
          onHandleCloseAlert={() => {
            setSuccessAlert(false);
          }}
        />
      )}
      <br />
      <br />
      <Main>
        <div className="w3-row-padding w3-auto">
          <div className="w3-col l8">
            <div className={styles.container}>
              <div className={styles.spinbtn} onClick={placeBet}></div>
              <div
                className={styles.wheel}
                ref={wheelRef}
                onTransitionEnd={handleTransitionEnd}
                style={wheelStyle}
              >
                <div
                  className={styles.number}
                  style={{ "--i": 1, "--clr": "#7d58c7" }}
                >
                  <span>
                    x0.1
                    <FaEthereum />
                  </span>
                </div>
                <div
                  className={styles.number}
                  style={{ "--i": 2, "--clr": "#20b2aa" }}
                >
                  <span>
                    x2.5
                    <FaEthereum />
                  </span>
                </div>
                <div
                  className={styles.number}
                  style={{ "--i": 3, "--clr": "#2196f3" }}
                >
                  <span>
                    x0
                    <FaEthereum />
                  </span>
                </div>
                <div
                  className={styles.number}
                  style={{ "--i": 4, "--clr": "#116bff" }}
                >
                  <span>
                    x10
                    <FaEthereum />
                  </span>
                </div>
                <div
                  className={styles.number}
                  style={{ "--i": 5, "--clr": "#ff0f0f" }}
                >
                  <span>
                    x0.5
                    <FaEthereum />
                  </span>
                </div>

                <div
                  className={styles.number}
                  style={{ "--i": 6, "--clr": "#db7093" }}
                >
                  <span>
                    x2
                    <FaEthereum />
                  </span>
                </div>
                <div
                  className={styles.number}
                  style={{ "--i": 7, "--clr": "#4165bb" }}
                >
                  <span>
                    x0.2
                    <FaEthereum />
                  </span>
                </div>
                <div
                  className={styles.number}
                  style={{ "--i": 8, "--clr": "#053ba8" }}
                >
                  <span>
                    x20
                    <FaEthereum />
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="w3-col l4">
            <form
              className="w3-container w3-text-white"
              style={{ backgroundColor: "#101010" }}
            >
              <h4>Stake and win</h4>
              <label htmlFor="">Amount</label>
              <input
                type="text"
                ref={stakeAmount}
                style={{
                  backgroundColor: "transparent",
                  borderBottom: "1px solid #555",
                  outline: "none",
                  color: "white",
                }}
                className="w3-input w3-text-white w3-border-bottom"
              />
              <br />
              <button
                onClick={placeBet}
                className="w3-btn w3-block"
                style={{ backgroundColor: "#3f410c" }}
              >
                Stake
              </button>
              <br />
            </form>
            <br />
            <div className="w3-padding" style={{ backgroundColor: "#101010" }}>
              <h1 className="w3-text-white">My Bets</h1>
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
                  {console.log(mySpins)}
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
              <br />
              <br />
              <br />
            </div>
          </div>
        </div>
      </Main>
    </>
  );
};

export default Casino;
