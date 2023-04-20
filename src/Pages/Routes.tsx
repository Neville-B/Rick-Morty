import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";
import CharacterDetail from "./CharacterDetail/CharacterDetail";
import CharactersList from "./CharacterList/CharactersList";
import CharacterLocation from "./CharacterDetail/CharacterLocation";
import CharacterLocationDetail from "./CharacterDetail/CharacterLocationDetail";

export const MainRoutes = () => {
  return (
      <Routes >
        <Route path="/" element={<CharactersList />} />
        <Route path="/character-detail/:CharacterId" element={<CharacterDetail />} />
        <Route path="/character-location" element={<CharacterLocation />} />
        <Route path="/character-location-detail/:location" element={<CharacterLocationDetail />} />
      </Routes>
  );
};
