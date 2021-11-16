import "./App.css";
import Header from "./components/Header";
import ComposanteParent from "./components/ComposanteParent";
import HookEffet from "./components/HookEffet"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserDisplay from "./components/UserDIsplay";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<ComposanteParent />} />
        <Route path="/about" element={<HookEffet />} />
        <Route path="/users" element={<UserDisplay />} />
      </Routes>
    </Router>
  );
}

export default App;
