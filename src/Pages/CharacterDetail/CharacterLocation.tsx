import { useEffect, useState } from "react";
import { GetAllLoc } from "../../Api/api";
import { onValue } from "firebase/database";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";

const CharacterLocation = () => {
  const locArr: any[] = [];

  const [locList, setLocList] = useState([{}]);

  useEffect(() => {
    GetAllLoc().then(
      (refDb) => {
        onValue(refDb, async (snapshot) => {
          const data = await snapshot.val();

          Object.keys(data).forEach((key) => {
            // console.log(key, data[key]);
            locArr.push(data[key]);
          });

          setLocList(locArr);
        });
      },
      () => {}
    );
  }, []);

  return (
    <>
      <h4 style={{marginTop: '3%'}}>
        <Link style={{ textDecoration: "none" }} to={"/"}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            fill="currentColor"
            className="bi bi-arrow-left-circle-fill"
            viewBox="0 0 16 16"
          >
            <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z" />
          </svg>
        </Link>{" "}
        Location List
      </h4>
      {locList.map((el: any) => {
        return (
          <div className="col" key={el.id} style={{ padding: "2%" }}>
            <Link
              style={{ textDecoration: "none" }}
              to={"/character-location-detail/" + el.location}
            >
              <Card
                style={{
                  minHeight: "100%",
                  backgroundColor: "#6e6e8f",
                  width: "100%",
                }}
              >
                <Card.Body style={{ padding: "2%", textAlign: "center" }}>
                  <Card.Title>
                    <b style={{ color: "white", fontSize: "14pt" }}>
                      {el.location}
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

export default CharacterLocation;
