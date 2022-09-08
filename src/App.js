import { BrowserRouter, Route, Routes,} from "react-router-dom";
// import Signup from "./components/Signup/signup";
import Dashboard from "./pages/Dashboard/Dashboard";
import Navbar from "./components/standardDashboard/navbar/navbar";
import Users from "./pages/Dashboard/Users";
import ProfileEdit from "./pages/Dashboard/ProfileEdit";
import NotificationPage from "./pages/Dashboard/NotificationPage";
import EmailPreferencePage from "./pages/Dashboard/EmailPreferencePage";
import Editing from "./pages/Dashboard/Editing";
import SSignup from "./components/Signup/SSignup";


function App() {
  return (
    <div >
      <BrowserRouter>
        <Routes>
        <Route path='/Navbar' element={<Navbar/>} /> 
        {/* <Route path='/*' element={< Signup />} />  */}
        <Route path='/*' element={< SSignup />} />
        <Route path='/dashboard' element={< Dashboard />} /> 
        <Route path='/Users' element={< Users />} /> 
        <Route path='/ProfileEdit' element={< ProfileEdit />} /> 
        <Route path='/NotificationPage' element={< NotificationPage />} /> 
        <Route path='/EmailPreference' element={< EmailPreferencePage />} /> 
        <Route path='/Edit' element={< Editing />} /> 
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
