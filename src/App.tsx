import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ComingSoon from "./pages/ComingSoon";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ComingSoon />} />
      </Routes>
    </Router>
  );
}
