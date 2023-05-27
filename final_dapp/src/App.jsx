import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import DefaultPage from "./pages/DefaultPage";
import ProfilePage from "./pages/ProfilePage";
import BasketBall from "./pages/BasketBall";
import Casino from "./pages/Casino";
import VerifyAccount from "./pages/VerifyAccount";
import MyAccount from "./pages/MyAccount";
import MyBets from "./pages/MyBets";
import VirtualSports from "./pages/VirtualSports";
import BetDetails from "./pages/BetDetails";
import MyTransactions from "./pages/MyTransactions";
import MyCasino from "./pages/MyCasino";
// import { data } from "./utils/apidata";
// console.log(data);
function App() {
  return (
    <div
      className="App"
      style={{
        margin: "0px",
        padding: "0px",
      }}
    >
      <Routes>
        <Route path="/">
          <Route index element={<DefaultPage />}></Route>
          <Route path="casino" element={<Casino />}></Route>
          <Route path="/:date" element={<DefaultPage />}></Route>

          <Route path="FootBall" element={<DefaultPage />}>
            <Route path=":date"></Route>
          </Route>
          <Route path="SPORTS" element={<DefaultPage />}>
            <Route path=":date"></Route>
          </Route>
          <Route path="VIRTUAL" element={<VirtualSports />}>
            <Route path=":date" element={<VirtualSports />}></Route>
          </Route>
          <Route path="Basketball" element={<BasketBall />}>
            <Route path=":weekday"></Route>
          </Route>

          <Route path="profile">
            <Route index element={<ProfilePage />}></Route>
            <Route path="Account Verification" element={<VerifyAccount />} />
            <Route path="Personal Data" element={<MyAccount />} />
            <Route path="Normal Bets" element={<MyBets />}></Route>
            <Route path="Normal Bets/:myBets" element={<BetDetails />}></Route>
            <Route path="my-transactions" element={<MyTransactions />}></Route>
            <Route path="My Transactions" element={<MyTransactions />}></Route>
            <Route path="Casino" element={<MyCasino />}></Route>
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
