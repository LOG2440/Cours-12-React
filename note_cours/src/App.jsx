import "./App.css";
import Header from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ButtonPage from "./components/Buttons/ButtonPage";
import ParagraphPage from './components/Paragraphs/ParagraphPage';
import ParentComponent from "./components/MainPage/ParentComponent";
import HookPage from "./components/Hooks/HookPage";
import UserDisplay from "./components/Hooks/UserDisplay";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path="/" element={<ParentComponent />} />
        <Route path="/paragraphs" element={<ParagraphPage />} />
        <Route path="/buttons" element={<ButtonPage />} />
        <Route path="/hooks" >
          <Route index path="" element={<HookPage />} />
          <Route path="user" element={<UserDisplay />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
