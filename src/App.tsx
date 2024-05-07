import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import Spell from "./components/spells/Spell";
import RootLayout from "./components/layout/RootLayout";
import Favorites from "./components/favorites/Favorites";
import Home from "./components/home/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<RootLayout />}>
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/spell/:index" element={<Spell />} />
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
