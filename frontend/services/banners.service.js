import axios from "axios"

export const getBanners = async () => {
    const { data } = await axios.get("api/banners");
    return data.banners
}