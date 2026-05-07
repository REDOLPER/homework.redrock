import Help from "./pages/Help";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/help" element={<Help />} />
      </Routes>
    </Router>
  )
};

export default App;
