import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import ForgetPassword from "./components/Reset-Password/ForgetPassword";
import ResetPassword from "./components/Reset-Password/ResetPassword";
import NewPassword from "./components/Reset-Password/NewPassword";
import UploadedProject from "./components/Student-Dashboard/UploadedProject";
import Dashboard from "./components/Student-Dashboard/Dashboard";
import Proposal from "./components/Student-Dashboard/Proposal";
import HodDashboard from "./components/HOD Dashboard/HodDashboard";
import HodLectdash from "./components/HOD && Lecturers Dashboard/Hod.Lect.dash";
import InternalDisscussant from "./components/HOD Dashboard/InternalDisscussant";
import SPGSRep from "./components/Dean/SPGSRep";
import InternalDiscussantDash from "./components/InternalDiscussant/InternalDiscussantDash";
import Admin from "./components/Admin/Admin";
import Section from "./components/Admin/Score";

import StudentUploadedProject from "./components/Student-Dashboard/StudentUploadedProject";
import SupervisorsDashboard from "./components/HOD && Lecturers Dashboard/Supervisor.dash";
import LecDashboard from "./components/HOD && Lecturers Dashboard/Lecturer.dash";

import NoticeInfo from "./components/Notifications/NoticeInfo";
import LecDashboard2 from "./components/HOD && Lecturers Dashboard/Lecturer.dash2";
import HODdash2 from "./components/HOD && Lecturers Dashboard/HOD.dash2";
import ProjectSession from "./components/HOD Dashboard/Session";

const App: React.FC = () => {
  const userData = JSON.parse(localStorage.getItem("userdata")!);

  return (
    <Router>
      <Routes>
        <Route
          path='/'
         
          element={
            userData?.auth ? (
              <>
                {userData?.user_data?.is_student ? (
                  <Navigate to={"/uploaded"} />
                ) : (
                  <>
                    {["HOD"].includes(userData?.user_data?.type) ? (
                      <Navigate to={"/session-student-projects"} />
                    ) : (
                      <Navigate to={"/notification"} />
                    )}
                  </>
                )}
              </>
            ) : (
              <Navigate to={"/login"} />
            )
          }></Route>
        <Route path='/SignUp' element={<SignUp />}></Route>
        <Route path='/login' element={<SignIn />}></Route>

        {userData?.auth && (
          <>
            <Route path='/admin' element={<Admin />}></Route>
            <Route path='/score' element={<Section />}></Route>
          </>
        )}

        {userData?.user_data.is_student ? (
          <>
            <Route path='/uploaded' element={<UploadedProject />}></Route>
          </>
        ) : (
          <>
            <Route
              path='/student-uploads'
              element={<StudentUploadedProject />}></Route>
            <Route
              path='/supervisor-dashboard'
              element={<SupervisorsDashboard />}></Route>

            <Route
              path='/lecturer-dashboard'
              element={<LecDashboard />}></Route>

            <Route
              path='/session-student-projects'
              element={<ProjectSession />}></Route>
            <Route
              path='/student-projects/:id'
              element={<LecDashboard2 />}></Route>
            <Route
              path='/student-projects-hod/:id'
              element={<HODdash2 />}></Route>
            <Route path='/hodDash' element={<HodDashboard />}></Route>
          </>
        )}

        <Route path='/forget' element={<ForgetPassword />}></Route>
        <Route path='/reset' element={<ResetPassword />}></Route>
        <Route path='/new' element={<NewPassword />}></Route>

        <Route path='/dash' element={<Dashboard />}></Route>
        <Route path='/proposal' element={<Proposal />}></Route>

        <Route path='/view-uploaded' element={<HodLectdash />}></Route>

        <Route path='/notification' element={<NoticeInfo />}></Route>

        <Route
          path='/InternalDisscussant'
          element={<InternalDisscussant />}></Route>
        <Route
          path='/InternalDisscussantDash'
          element={<InternalDiscussantDash />}></Route>
        <Route path='/spgs' element={<SPGSRep />}></Route>
        <Route path='/**' element={<Navigate to={"/"} />}></Route>
      </Routes>
    </Router>
  );
};

export default App;
