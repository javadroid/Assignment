import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ForgetPassword from "./components/ForgetPassword";
import ResetPassword from "./components/ResetPassword";
import NewPassword from "./components/NewPassword";
import UploadedProject from "./components/Student-Dashboard/UploadedProject";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignIn />}></Route>
        <Route path="/SignUp" element={<SignUp />}></Route>
        <Route path="/forget" element={<ForgetPassword />}></Route>
        <Route path="/reset" element={<ResetPassword />}></Route>
        <Route path="/newpassword" element={<NewPassword />}></Route>
        <Route path="/uploadedProject" element={<UploadedProject />}></Route>
      </Routes>
    </Router>
  );
};

export default App;
