import axios from "axios";

export default async function handler(req, res) {
  try {
    const { id } = req.query;
    const { data } = await axios.get(
      `${process.env.NEXT_PUBLIC_API_SERVER}/audiovisuals/${id}`
    );
    res.json({
      data,
    });
  } catch (error) {
    res.status(500).json({
      message: 'error searching audiovisual'
    });
  }
}
