import { BrowserRouter, Route, Routes,} from "react-router-dom";
import Navbar from "./components/navbar/navbar";
import Signup from "./components/Signup/signup";
import Dashboard from "./pages/Dashboard";
import Users from "./pages/Users";


function App() {
  return (
    <div >
      <BrowserRouter>
        <Routes>

        <Route path='/Navbar' element={< Navbar />} /> 
        <Route path='/*' element={< Signup />} /> 
        <Route path='/dashboard' element={< Dashboard />} /> 
        <Route path='/Users' element={< Users />} /> 

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
