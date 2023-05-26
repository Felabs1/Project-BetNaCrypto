import { useRef } from "react";
import { verifyAccount } from "../../utils/web3Engine";
// import "./verifyForm.module.css";
const VerifyForm = () => {
  const name = useRef();
  const handleClick = (e) => {
    e.preventDefault();
    const data = name.current.value;
    console.log(data);
    if (data == "") {
      alert("please fill  in the details");
      return;
    }

    verifyAccount(data);
  };
  return (
    <form className="w3-padding">
      <label htmlFor="">Name</label>
      <input
        type="text"
        style={{ backgroundColor: "inherit", border: "1px solid #777" }}
        ref={name}
        className="w3-input w3-border"
      />
      <br />
      <button type="button" onClick={handleClick} className="w3-btn w3-yellow">
        Verify
      </button>
    </form>
  );
};

export default VerifyForm;
