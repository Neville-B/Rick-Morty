import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";
import CharacterDetail from "./CharacterDetail";
import CharactersList from "./CharactersList";

export const MainRoutes = () => {
  return (
    <HashRouter>
      <Routes >
      <Route path="/" element={<CharactersList />} />
        <Route path="/character-detail" element={<CharacterDetail />} />
      </Routes>
    </HashRouter>
  );
};
