import { CharacterCard } from "./CharacterCard";

const CharactersList = () => {
  return (
    <>
      <div>
        <div className="row" style={{ padding: "2% 4% 2% 4%", margin: 0 }}>
          <CharacterCard />
        </div>
      </div>
    </>
  );
};

export default CharactersList;
