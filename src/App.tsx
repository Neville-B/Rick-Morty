import React, { useEffect, useState } from "react";
import "./App.css";
import { MainRoutes } from "./Pages/Routes";
import { ApiData } from "./Api/api";
import { Link, useLocation } from "react-router-dom";
import { Button } from "react-bootstrap";

export const CharacterContext = React.createContext([]);

function App() {  
  const [characterList, setCharacterList] = useState([]);
  const [url, setUrl] = useState("https://rickandmortyapi.com/api/character?page=1");
  const [prevDisable, setPrevDisable] = useState(false);
  const [nextDisable, setNextDisable] = useState(false);
  const [show, setShow] = useState(true);
  const [prevUrl, setPrevUrl] = useState('');
  const [nextUrl, setNextUrl] = useState('');

  const location = useLocation();
  console.log(location.pathname);

  useEffect(() => {
    if (location.pathname === '/') {
      setShow(true);
    } else {
      setShow(false);
    }
  }, [location.pathname])

  

  useEffect(() => {
    ApiData(url).then((resp) => {
      setCharacterList(resp.results);

      console.log(resp.info.next);

      if (resp.info.next == null) {
        setNextDisable(true);
      } else {
        setNextDisable(false);
        setNextUrl(resp.info.next);
      }

      if (resp.info.prev == null) {
        setPrevDisable(true);
      } else {
        setPrevDisable(false);
        setPrevUrl(resp.info.prev);
      }
      
    });
  }, [url]);


  const goPrev = () => {
    setUrl(prevUrl);
  }

  const goNext = () => {
    setUrl(nextUrl);
  }

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
      <div style={{textAlign: 'center', display: show ? 'block' : 'none'}}>
        <Button
          variant="primary"
          size="sm"
          style={{marginRight: '4%', marginTop: '3%'}}
          disabled={prevDisable}
          onClick={goPrev}
        >
          Prev Page
        </Button>
        <Button
          variant="info"
          size="sm"
          style={{marginTop: '3%'}}
          disabled={nextDisable}
          onClick={goNext}
        >
          Next Page
        </Button>
        </div>
      <MainRoutes />
    </CharacterContext.Provider>
  );
}

export default App;
