import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";
import CharacterDetail from "./CharacterDetail";
import CharactersList from "./CharactersList";

export const MainRoutes = () => {
  return (
    <BrowserRouter basename="/rick-morty-app">
      <Routes >
        <Route path="/" element={<CharactersList />} />
        <Route path="/character-detail" element={<CharacterDetail />} />
      </Routes>
    </BrowserRouter>
  );
};
