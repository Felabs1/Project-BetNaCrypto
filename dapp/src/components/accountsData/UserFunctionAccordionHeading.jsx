
const UserFunctionAccordionHeading = ({
  iconData,
  onClick,
  heading,
  caretIconData,
}) => {
  return (
    <>
      <div className="w3-btn w3-left-align w3-block" onClick={onClick}>
        <span
          style={{ backgroundColor: "#f4fa20", color: "black" }}
          className="w3-padding-small w3-round-xlarge"
        >
          {iconData}
        </span>
        &nbsp;
        <b className="w3-small" style={{ fontWeight: "bold" }}>
          {heading}
        </b>
        <span
          style={{ backgroundColor: "#292929" }}
          className="w3-right w3-btn w3-padding-small w3-round-xlarge"
        >
          {caretIconData}
        </span>
      </div>
    </>
  );
};

export default UserFunctionAccordionHeading;
