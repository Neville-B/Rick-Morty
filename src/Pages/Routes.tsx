import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";
import CharacterDetail from "./CharacterDetail/CharacterDetail";
import CharactersList from "./CharacterList/CharactersList";

export const MainRoutes = () => {
  return (
    <HashRouter>
      <Routes >
        <Route path="/" element={<CharactersList />} />
        <Route path="/character-detail/:CharacterId" element={<CharacterDetail />} />
      </Routes>
    </HashRouter>
  );
};
