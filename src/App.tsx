import React, { useEffect, useState } from "react";
import "./App.css";
import { MainRoutes } from "./Pages/Routes";
import { ApiData } from "./Api/api";
import { Link } from "react-router-dom";

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
      <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{backgroundColor: '#8d8dc4'}}>
      <h2 >
          <center style={{ color: "#8d8dc4" }}> Rick and Morty</center>
        </h2>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link style={{ textDecoration: "none" }} to={"/"}>
                  Character List
              </Link>
            </li>
            <li className="nav-item">
              <Link style={{ textDecoration: "none" }} to={"/character-location"}>
                  Character Location
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <MainRoutes />
    </CharacterContext.Provider>
  );
}

export default App;
