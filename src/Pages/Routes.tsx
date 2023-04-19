import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";
import CharacterDetail from "./CharacterDetail";
import CharactersList from "./CharactersList";

export const MainRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/character-detail" element={<CharacterDetail />} />
        <Route path="/" element={<CharactersList />} />
      </Routes>
    </BrowserRouter>
  );
};
