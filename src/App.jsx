import { Routes, Route, Navigate } from "react-router";
import LoginPage from "./pages/login";
import RegisterPage from "./pages/register";
import DashboardPage from "./pages/dashboard";

const App = () => {
  return (  
    <div className="App">
      <Routes>
        <Route path="/" element={<LoginPage/>}/>
        <Route path="/register" element={<RegisterPage/>}/>
        <Route path="/dashboard/:name" element={<DashboardPage/>}/>
        <Route path="*" element={<Navigate to="/"/>}/>
      </Routes>
    </div>
  );
}
 
export default App;