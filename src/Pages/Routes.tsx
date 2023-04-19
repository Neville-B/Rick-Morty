import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";
import CharacterDetail from "./CharacterDetail";
import CharactersList from "./CharactersList";

export const MainRoutes = () => {
  return (
    <BrowserRouter>
      <Routes >
        <Route path="/rick-morty-app/character-detail" element={<CharacterDetail />} />
        <Route path="/rick-morty-app" element={<CharactersList />} />
      </Routes>
    </BrowserRouter>
  );
};
