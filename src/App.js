import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginRegister from "./pages/Login/Login&Register";
import UserPage from "./pages/User";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<LoginRegister />} />
        <Route exact path="/preview" element={<UserPage />} />
      </Routes>
    </Router>
  );
}

export default App;
