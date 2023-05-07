import { useRef } from "react";
import TopNav from "../components/Navigations/TopNav";
import Main from "../components/Main/Main";
import styles from "./Casino.module.css";
import { useState } from "react";
import { FaEthereum } from "react-icons/fa";
import { SpinDatTing, getAccountSpins, web3 } from "../utils/web3Engine";
import { useEffect } from "react";
import { claimWonTokens } from "../utils/interactiveWeb3Engine";

const Casino = () => {
  const [value, setValue] = useState("");
  const [wheelStyle, setWheelStyle] = useState({
    transform: `rotate(${value}deg)`,
  });
  let [mySpins, setMySpins] = useState([]);
  useEffect(() => {
    let c = getAccountSpins();
    c.then((data) => {
      setMySpins(data);
      // console.log(data.length);
    });
  }, []);
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
    claimWonTokens(gameId.toString());
  };

  const placeBet = (e) => {
    e.preventDefault();
    const v = stakeAmount.current.value;
    if (v == "") {
      alert("place a value in v");
      return;
    }
    handleCasinoSpin();
  };

  const handleTransitionEnd = () => {
    const v = stakeAmount.current.value;
    const currentRotation = wheelRef.current.style.transform;
    const currentRotationValue = currentRotation
      ? parseInt(currentRotation.replace("rotate(", "").replace("deg)", ""), 10)
      : 0;
    const angle = ((currentRotationValue % 360) + 360) % 360; // normalize angle to 0-359
    const prices = ["x20", "x0.7", "x2", "x1.5", "x10", "x0", "x1.2", "x0.1"];
    const odds = ["20", "0.7", "2", "1.5", "10", "0", "1.2", "0.1"];
    const index = Math.floor(angle / 45); // divide circle into 10 equal parts of 36 degrees each
    // const winnings = prices[index] * amount;
    setValue(prices[index]);
    SpinDatTing("won " + prices[index], odds[index], v);
    setValue("");
    stakeAmount.current.value = "";

    console.log(prices[index]);
  };
  return (
    <>
      <TopNav />
      <br />
      <br />
      <Main>
        <div className="w3-row-padding">
          <div className="w3-col l6">
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
                    x1.2
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
                    x1.5
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
                    x0.7
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
              <table className="w3-table w3-text-white w3-padding">
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
                  {mySpins.length !== 0
                    ? mySpins.map(
                        ({
                          betId,
                          betResult,
                          deposit,
                          gamingOdds,
                          possiblePayout,
                          timeStamp,
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
                              <button
                                className="w3-btn w3-padding-small"
                                style={{ backgroundColor: "#3f410c" }}
                                onClick={claimTokens}
                                value={betId}
                              >
                                Claim
                              </button>
                            </td>
                          </tr>
                        )
                      )
                    : ""}{" "}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </Main>
    </>
  );
};

export default Casino;
