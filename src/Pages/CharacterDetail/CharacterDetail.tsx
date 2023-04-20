import { useContext, useEffect, useState } from "react";
import { Character } from "../../interfaces/Character";
import { CharacterContext } from "../../App";
import { Link, useParams } from "react-router-dom";
import { Badge, Button, Spinner } from "react-bootstrap";
import { DeleteLoc, GetLoc, SaveLoc } from "../../Api/api";
import { onValue } from "firebase/database";

const CharacterDetail = () => {
  const characterList: Character[] = useContext(CharacterContext);
  const [locName, setLocName] = useState("");
  const [invalid, setInvalid] = useState(false);
  const [toggle, setToggle] = useState(false);
  const [loading, setLoading] = useState(false);
  const [disable, setDisable] = useState(false);
  const [currLoc, setCurrLoc] = useState("-");
  const [remove, setRemove] = useState(false);

  let { CharacterId } = useParams();
  let idxChar = characterList.findIndex(
    (x) => x.id === parseInt(CharacterId === undefined ? "" : CharacterId)
  );

  useEffect(() => {
    setDisable(true);
    setToggle(false);
    if (CharacterId) {
      GetLoc(parseInt(CharacterId)).then(
        (refDb) => {
          onValue(refDb, async (snapshot) => {
            const data = await snapshot.val();

            if (data != null) {
              setCurrLoc(data.location);
              setDisable(true);
              setRemove(true);
            } else {
              setCurrLoc("-");
              setDisable(false);
            }
          });
        },
        () => {}
      );
    }
  }, [CharacterId]);

  const assignLoc = (e: any) => {
    e.preventDefault();

    if (locName === "") {
      setInvalid(true);
    } else {
      setInvalid(false);
      setLoading(true);
      setToggle(false);
      setDisable(true);
      const tempLoc = {
        id: characterList[idxChar].id,
        location: locName,
        url: characterList[idxChar].url
      };

      SaveLoc(tempLoc, characterList[idxChar].id).then((resp) => {
        setLoading(false);
      });
    }
  };

  const locChange = (e: any) => {
    setLocName(e.target.value);
  };

  const toggleLoc = () => {
    setToggle(!toggle);
  };

  const deleteLoc = () => {
    setLoading(true);

    DeleteLoc(characterList[idxChar].id).then((resp) => {
      setLoading(false);
      setDisable(false);
      setRemove(false);
    });
  };

  return (
    <>
      <div>
        {idxChar === -1 ? (
          ""
        ) : (
          <div className="row" style={{ margin: 0 }}>
            <div className="col-12" style={{ padding: 0 }}>
              <img
                src={characterList[idxChar].image}
                alt=""
                style={{ width: "100%", height: "100%" }}
              />
            </div>
            <div className="col-12" style={{ paddingTop: "2%" }}>
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
              </Link>
              <span
                style={{
                  fontWeight: 650,
                  fontSize: "18pt",
                  margin: "0 4% 0 3%",
                  color: "#e1e1ed",
                }}
              >
                {characterList[idxChar].name}
              </span>
              <br />
              <Badge
                bg="info"
                text="dark"
                style={{
                  padding: "1% 4% 1% 4%",
                  marginRight: "2%",
                  marginBottom: '3%',
                  fontSize: "11pt",
                  float: "right",
                }}
              >
                {characterList[idxChar].status}
              </Badge>
              <Badge
                bg="primary"
                text="dark"
                style={{
                  padding: "1% 4% 1% 4%",
                  marginRight: "6%",
                  fontSize: "11pt",
                  float: "right",
                }}
              >
                {characterList[idxChar].species}
              </Badge>
            </div>
            <div className="col-12">
              <h5>
                Location: {currLoc}{" "}
                <svg
                  onClick={deleteLoc}
                  style={{ display: remove ? "inline-block" : "none" }}
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="red"
                  className="bi bi-x-circle-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z" />
                </svg>
              </h5>{" "}
              <Button
                variant="success"
                size="sm"
                onClick={toggleLoc}
                disabled={disable}
              >
                <Spinner
                  style={{ display: loading ? "inline-block" : "none" }}
                  as="span"
                  animation="border"
                  size="sm"
                  role="status"
                  aria-hidden="true"
                />{" "}
                Assign{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-geo-alt"
                  viewBox="0 0 16 16"
                >
                  <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
                  <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                </svg>
              </Button>
              <form
                onSubmit={assignLoc}
                style={{ display: toggle ? "block" : "none" }}
              >
                <label style={{ paddingRight: "1%" }}>Location name:</label>
                {/* <span>Please input location name</span> */}
                <input
                  type="text"
                  onChange={locChange}
                  style={{ border: invalid ? "1px solid red" : "none" }}
                />
                <button
                  type="submit"
                  style={{ border: "none", backgroundColor: "#8d8dc4" }}
                >
                  <svg
                    type="submit"
                    style={{ marginLeft: "2%" }}
                    xmlns="http://www.w3.org/2000/svg"
                    width="23"
                    height="23"
                    fill="currentColor"
                    className="bi bi-check-circle"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                    <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z" />
                  </svg>
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default CharacterDetail;
