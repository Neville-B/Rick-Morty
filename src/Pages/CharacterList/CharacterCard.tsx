import { Link } from "react-router-dom";
import { Character } from "../../interfaces/Character";
import { Card } from "react-bootstrap";
import { useContext } from "react";
import { CharacterContext } from "../../App";


export const CharacterCard = () => {
  const characterList = useContext(CharacterContext);

  return (
    <>
      {characterList.map((el: Character) => {
        return (
          <div className="col-6 col-md-2" key={el.id} style={{ padding: "2%" }}>
            <Link style={{ textDecoration: "none" }} to={"character-detail/" + el.id}>
              <Card style={{ minHeight: "100%", backgroundColor: "#6e6e8f" }}>
                <Card.Img variant="top" src={el.image} />
                <Card.Body style={{ padding: "2%", textAlign: "center" }}>
                  <Card.Title>
                    <b style={{ color: "white", fontSize: "14pt" }}>
                      {el.name}
                    </b>
                  </Card.Title>
                </Card.Body>
              </Card>
            </Link>
          </div>
        );
      })}
    </>
  );
};
