import "./App.css";
import Header from "./components/Header";
import ComposanteParent from "./components/ComposanteParent";
import HookEffet from "./components/HookEffet"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<ComposanteParent />} />
        <Route path="/about" element={<HookEffet />} />
      </Routes>
    </Router>
  );
}

export default App;
