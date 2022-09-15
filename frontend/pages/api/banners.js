import axios from "axios";

export default async function handler(req, res) {
  try {
    const banners = await axios.get(`${process.env.proxyApi}/banners`);
    res.status(200).json({
      banners: banners.data,
    });
  } catch (error) {
    res.status(500).json({
      message: 'banners not found',
    });
  }
}
