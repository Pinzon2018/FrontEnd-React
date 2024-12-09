import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginForm from "./pages/Login/Login";
import Home from "./pages/Home/Home";

function AppRoutes() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<LoginForm/>} />
                <Route path="/home" element={<Home/>}/>
            </Routes>
        </Router>
    )
}

export default AppRoutes;