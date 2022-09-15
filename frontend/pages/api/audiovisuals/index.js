import axios from "axios";

import objectToQueryString from '../../../utils/objectToQueryString'

export default async function handler(req, res) {
  try {
    const query = objectToQueryString(req.query)
    const { data } = await axios.get(`${process.env.NEXT_PUBLIC_API_SERVER}/audiovisuals?${query}`);
    
    res.status(200).json({
      audiovisuals: data,
    });
  } catch (error) {
    res.status(500).json({
      message: 'error searching audiovisuals'
    });
  }
}
