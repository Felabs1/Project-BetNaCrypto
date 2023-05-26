import { Link } from "react-router-dom";

const UserAccountsAccountsData = ({ NavData }) => {
  return (
    <>
      <div>
        {NavData.map((data) => {
          return (
            <div
              key={data}
              className="w3-padding w3-round"
              style={{
                backgroundColor: "#2b2b2b",
                marginBottom: "2px",
                cursor: "pointer",
              }}
            >
              <Link to={data}>
                <span>{data}</span>
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default UserAccountsAccountsData;
