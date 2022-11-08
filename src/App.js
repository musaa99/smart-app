import './App.css';
import { BrowserRouter, Route, Routes,} from "react-router-dom";
import Dashboard from './pages/standardusers/Dashboard';
 import Users from "./pages/standardusers/Users";
import ProfileEdit from "./pages/standardusers/ProfileEdit";
import NotificationPage from "./pages/standardusers/NotificationPage";
import EmailPreferencePage from "./pages/standardusers/EmailPreferencePage";
import LoginPage from "./pages/standardusers/LoginPage";
import Teampage from './pages/standardusers/Teampage';
import OperationDepartment from './pages/standardusers/OperationDepartment';
import Managerdashboard from './pages/managerpage/Dashboard';
import Signin from './components/Login/Signin';
import { useSelector } from 'react-redux';
import EventPage from './pages/standardusers/EventHistoryPage';
import EventlogPage from './pages/standardusers/EventlogPage';
import Layout from './pages/managerpage/layout';
 import ManagerPage from './pages/managerpage/Userpage';
import ManagerProfileEdit from './pages/managerpage/Editmanagersprofile';
import ManagerNotifications from './pages/managerpage/Notification';
import OrgainzationPage from './pages/managerpage/OrgainzationPage';
import CredentialsPage from './pages/managerpage/CredentialPage';
import Index from './pages/managerpage/MTeampage';
import Bills from './pages/managerpage/Bills';
import History from './pages/managerpage/History';


function App() {
  const { user } = useSelector((state) => state.auth);

  return (
      <BrowserRouter>
        <Routes>
        <Route path='/*' element={< Signin/>} /> 
        {/* TODO: update check variable */}
        <Route path='/dashboard' element={(user?.user_type?.toLowerCase() === '!employee') ? <Dashboard /> : <Managerdashboard /> } />  
        {/* <Route path='/dashboard'> 
          {(user?.user_type?.toLowerCase() === 'emp') && <Dashboard /> }
          { (user?.user_type?.toLowerCase() === 'b') && <Managerdashboard /> }
          { (user?.user_type?.toLowerCase() === 'c') && <c /> }
          { (user?.user_type?.toLowerCase() === 'd') && <d /> }
        </Route>  */}
        <Route path='/Users' element={< Users />} /> 
        <Route path='/ProfileEdit' element={< ProfileEdit />} /> 
        <Route path='/NotificationPage' element={< NotificationPage />} /> 
        <Route path='/EmailPreference' element={< EmailPreferencePage />} /> 
        <Route path='/LoginPage' element={< LoginPage />} /> 
        <Route path='/Teampage' element={< Teampage />} /> 
        <Route path='/ManagerTeampage' element={< Index />} /> 
        <Route path='/Operations' element={<OperationDepartment  />} /> 
        <Route path='/EventPage' element={<EventPage  />} /> 
        <Route path='/Eventlog' element={<EventlogPage  />} /> 
        {/* <>midlevel</> */}
         <Route path='/layout' element={< Layout />} /> 
        <Route path='/managerprofile' element={< ManagerPage />} /> 
        <Route path='/editmanagerprofile' element={< ManagerProfileEdit />} /> 
        <Route path='/managerNotifications' element={< ManagerNotifications />} /> 
        <Route path='/Organization' element={< OrgainzationPage />} /> 
        <Route path='/Credential' element={< CredentialsPage />} /> 
        <Route path='/billing' element={<Bills  />} /> 
        <Route path='/History' element={<History  />} /> 
         


        </Routes>
      </BrowserRouter>
  );
}

export default App;
