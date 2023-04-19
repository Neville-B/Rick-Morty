import axios from "axios";

export const ApiData = async (url: string) => {
  return axios.get(url).then(
    (charResp) => {
      return charResp.data;
    }, (err) => {
      return err;
    }
  );
}