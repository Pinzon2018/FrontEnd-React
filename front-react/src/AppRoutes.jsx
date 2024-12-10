import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginForm from "./pages/Login/Login";

function AppRoutes() {
    return (
        <Router>
            <Routes>
                <Route path="/login" element={<LoginForm />} />
            </Routes>
        </Router>
    );
}

export default AppRoutes;
