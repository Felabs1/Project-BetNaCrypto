import Main from "../components/Main/Main";
import SecondNav from "../components/Navigations/SecondNav";
import SideNav from "../components/Navigations/SideNav";
import TopNav from "../components/Navigations/TopNav";
import {
  FaEye,
  FaClipboard,
  FaPaperclip,
  FaEthereum,
  FaSignOutAlt,
  FaUser,
  FaArrowDown,
  FaCaretDown,
  FaCaretSquareUp,
  FaCaretUp,
} from "react-icons/fa";
import AccountCard from "../components/accountsData/AccountCard";
import AccountActions from "../components/accountsData/AccountActions";

const ProfilePage = () => {
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
          <AccountActions />
        </div>
      </Main>
    </>
  );
};

export default ProfilePage;
