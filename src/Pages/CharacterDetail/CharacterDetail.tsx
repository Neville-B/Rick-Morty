import React, { useContext, useState } from 'react'
import { Character } from '../../interfaces/Character';
import { CharacterContext } from '../../App';
import { useParams } from "react-router-dom";

const CharacterDetail = () => {
  const characterList:Character[] = useContext(CharacterContext);
  let { CharacterId }  = useParams();
  let idxChar = characterList.findIndex(x => x.id === parseInt(CharacterId === undefined ? '' : CharacterId));
  
  console.log(idxChar);
  
  return (
    <>
    <div>{idxChar === -1 ? '' : characterList[idxChar].name}</div>
    </>
  );
}

export default CharacterDetail;