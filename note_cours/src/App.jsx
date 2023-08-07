import "./App.css";
import Header from "./components/Header";
import ComposanteParent from "./components/ComposanteParent";
import HookEffet from "./components/HookEffet";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserDisplay from "./components/UserDIsplay";
import ButtonPage from "./components/Buttons/ButtonPage";
import ParagraphPage from './components/Paragraphs/ParagraphPage';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<ComposanteParent />} />
        <Route path="/articles" element={<ParagraphPage />} />
        <Route path="/buttons" element={<ButtonPage />} />
        <Route path="/hooks" element={<HookEffet />} />
        <Route path="/users" element={<UserDisplay />} />
      </Routes>
    </Router>
  );
}

export default App;
