import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ForgetPassword from "./components/ForgetPassword";
import ResetPassword from "./components/ResetPassword";
import NewPassword from "./components/NewPassword";
import UploadedProject from "./components/Student-Dashboard/UploadedProject";
import Dashboard from "./components/Student-Dashboard/Dashboard";
import Proposal from "./components/Student-Dashboard/Proposal";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignIn />}></Route>
        <Route path="/SignUp" element={<SignUp />}></Route>
        <Route path="/forget" element={<ForgetPassword />}></Route>
        <Route path="/reset" element={<ResetPassword />}></Route>
        <Route path="/new" element={<NewPassword />}></Route>
        <Route path="/uploaded" element={<UploadedProject />}></Route>
        <Route path="/dash" element={<Dashboard />}></Route>
        <Route path="/proposal" element={<Proposal />}></Route>
      </Routes>
    </Router>
  );
};

export default App;
