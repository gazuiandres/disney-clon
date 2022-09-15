import axios from "axios";

import objectToQueryString from "../utils/objectToQueryString";

export const getAudiovisuals = async (filters = {}) => {
  let query = objectToQueryString(filters)

  const { data } = await axios.get(`api/audiovisuals?${query}`);
  return data.audiovisuals;
};
