import { useState, useEffect } from "react";
import { getAccountDetails } from "../../utils/web3Engine";
const DisplayAccount = () => {
  const [accountsDetails, setAccountDetails] = useState({});

  useEffect(() => {
    const a = getAccountDetails();
    a.then((data) => setAccountDetails(data));
  }, [getAccountDetails]);
  return (
    <div className="w3-padding">
      <h3>{accountsDetails["username"]}</h3>
    </div>
  );
};

export default DisplayAccount;
