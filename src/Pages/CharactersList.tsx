import React, { useEffect, useState } from "react";
import { ApiData } from '../Api/api'
import { Link } from "react-router-dom";

const CharactersList = () => {
  const [characterList, setCharacterList] = useState([]);

  useEffect(() => {
    ApiData('https://rickandmortyapi.com/api/character').then(
      (resp) => {
        setCharacterList(resp.results);
      }
    );
  }, [])
  

  return (
    <>
      <h2>
        <center>Rick and Morty</center>
        <Link to='character-detail'>Detail</Link>
      </h2>
      {characterList.map((el:any) => {
         return (<li key={el.id}>{el.name}</li>)
       })}

      {/* <div className="container">
      <div className="row">
        <div className="col-4">egwf efe</div>
        <div className="col-4">afaef</div>
      </div>
      </div> */}
    </>
  );
};

export default CharactersList;
