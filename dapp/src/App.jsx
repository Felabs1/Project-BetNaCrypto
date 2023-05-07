import DefaultPage from "./pages/DefaultPage";
import "./app.css";
import ProfilePage from "./pages/ProfilePage";
import BasketBall from "./pages/BasketBall";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Casino from "./pages/Casino";
import VerifyAccount from "./pages/VerifyAccount";
import MyAccount from "./pages/MyAccount";
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
          <Route path=":weekday"></Route>
          <Route path="soccer" element={<DefaultPage />}>
            <Route path=":weekday"></Route>
          </Route>
          <Route path="SPORTS" element={<DefaultPage />}>
            <Route path=":weekday"></Route>
          </Route>
          <Route path="Basketball" element={<BasketBall />}>
            <Route path=":weekday"></Route>
          </Route>

          <Route path="profile">
            <Route index element={<ProfilePage />}></Route>
            <Route path="Account Verification" element={<VerifyAccount />} />
            <Route path="Personal Data" element={<MyAccount />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
