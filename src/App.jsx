import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import Registration from "./pages/Registration.jsx";

export default function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Registration />} />
          <Route
            path="/book"
            element={<div>Booking Page (to be implemented)</div>}
          />{" "}
          {/* Placeholder */}
        </Routes>
      </div>
    </Router>
  );
}
