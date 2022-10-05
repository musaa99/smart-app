import './App.css';
import { BrowserRouter, Route, Routes,} from "react-router-dom";
import Signup from "./components/Signup/signup";
import Dashboard from "./pages/Dashboard/Dashboard";
import Users from "./pages/Dashboard/Users";
import ProfileEdit from "./pages/Dashboard/ProfileEdit";
import NotificationPage from "./pages/Dashboard/NotificationPage";
import EmailPreferencePage from "./pages/Dashboard/EmailPreferencePage";
import LoginPage from "./pages/Dashboard/LoginPage";
//mid level
import DashboardMid from './pages/DashboardMidlevel/Dashboard';
//Super Admin
import AdminDashboard from './pages/Admindashboard/Dashboard';
import AdminUsers from './pages/Admindashboard/Users';

function App() {
  return (
    <div className="" >
      <BrowserRouter>
        <Routes>
        <Route path='/*' element={< Signup />} /> 
        <Route path='/dashboard1' element={< Dashboard />} /> 
        <Route path='/Users' element={< Users />} /> 
        <Route path='/ProfileEdit' element={< ProfileEdit />} /> 
        <Route path='/NotificationPage' element={< NotificationPage />} /> 
        <Route path='/EmailPreference' element={< EmailPreferencePage />} /> 
        <Route path='/LoginPage' element={< LoginPage />} /> 
        {/* <>midlevel</> */}
         <Route path='/dashboard2' element={< DashboardMid />} /> 
         {/* <>Super Admin</>  */}
         <Route path='/dashboard3' element={< AdminDashboard />} /> 
        <Route path='/User3' element={< AdminUsers />} /> 
         
        </Routes>
        
        
      </BrowserRouter>
    </div>
  );
}

export default App;
