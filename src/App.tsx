import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Spells from "./components/spells/Spells";
import "./index.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Spells />} />
      </Routes>
    </Router>
  );
}

export default App;
