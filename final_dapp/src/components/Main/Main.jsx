import React from "react";

const Main = (props) => {
  return (
    <>
      <div className="main">
        <br />
        <br />
        {props.children}
      </div>
    </>
  );
};

export default Main;
