import { Routes, Route, Navigate } from "react-router";
import LoginPage from "./pages/login";
import RegisterPage from "./pages/register";
import DashboardPage from "./pages/dashboard";
import { useState } from "react";

const App = () => {
  const [user, setUser] = useState("")

  return (  
    <div className="App">
      <Routes>
        <Route path="/" element={<LoginPage setUser={setUser}/>}/>
        <Route path="/register" element={<RegisterPage/>}/>
        <Route path="/dashboard/:id" element={<DashboardPage user={user} setUser={setUser}/>}/>
        <Route path="*" element={<Navigate to="/"/>}/>
      </Routes>
    </div>
  );
}
 
export default App;