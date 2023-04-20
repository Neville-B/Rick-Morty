import { CharacterCard } from "./CharacterCard";

const CharactersList = () => {
  return (
    <>
      <div style={{ backgroundColor: "#383861" }}>
        <h2 style={{ padding: "6% 2% 4% 2%" }}>
          <center style={{ color: "white" }}>Rick and Morty</center>
        </h2>
        <div className="row" style={{ padding: "2% 4% 2% 4%" }}>
            <CharacterCard />
        </div>
      </div>
    </>
  );
};

export default CharactersList;
