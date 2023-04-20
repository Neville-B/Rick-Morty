import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { MainRoutes } from "./Pages/Routes";
import { ApiData } from "./Api/api";

export const CharacterContext = React.createContext([]);

function App() {
  const [characterList, setCharacterList] = useState([]);

  useEffect(() => {
    ApiData("https://rickandmortyapi.com/api/character").then((resp) => {
      setCharacterList(resp.results);
    });
  }, []);

  return (
    <CharacterContext.Provider value={characterList}>
      <MainRoutes />
    </CharacterContext.Provider>
  );
}

export default App;
