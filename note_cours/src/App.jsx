import "./App.css";
import Header from "./components/Header";
import HookEffet from "./components/HookEffet";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserDisplay from "./components/UserDIsplay";
import ButtonPage from "./components/Buttons/ButtonPage";
import ParagraphPage from './components/Paragraphs/ParagraphPage';
import ParentComponent from "./components/MainPage/ParentComponent";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path="/" element={<ParentComponent />} />
        <Route path="/articles" element={<ParagraphPage />} />
        <Route path="/buttons" element={<ButtonPage />} />
        <Route path="/hooks" element={<HookEffet />} />
        <Route path="/users" element={<UserDisplay />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
