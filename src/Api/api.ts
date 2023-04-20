import axios from "axios";
import database from "../firebase";
import { ref, remove, set } from "firebase/database";

export const ApiData = async (url: string) => {
  return axios.get(url).then(
    (charResp) => {
      return charResp.data;
    },
    (err) => {
      return err;
    }
  );
};

export const GetCharData = async (url: string) => {
  return await axios.get(url).then(
    (charResp) => {
      return charResp.data;
    },
    (err) => {
      return err;
    }
  );
};

export const SaveLoc = async (location: object, id: number) => {
  await set(ref(database, "locations/character-" + id), location).then(
    (resp) => {},
    (err) => {}
  );
};

export const GetLoc = async (id: number) => {
  const refDb = ref(database, "locations/character-" + id);

  return refDb;
};

export const GetAllLoc = async () => {
  const refDb = ref(database, "locations");

  return refDb;
};

export const DeleteLoc = async (id: number) => {
  await remove(ref(database, "locations/character-" + id)).then(
    (resp) => {},
    (err) => {}
  );
};
