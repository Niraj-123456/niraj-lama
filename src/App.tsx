import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Spells from "./components/spells/Spells";
import Spell from "./components/spells/Spell";
import "./index.css";
import RootLayout from "./components/layout/RootLayout";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<RootLayout />}>
          <Route path="/spell/:index" element={<Spell />} />
          <Route path="/" element={<Spells />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
