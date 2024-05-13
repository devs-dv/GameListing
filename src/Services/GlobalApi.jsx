import axios from "axios";

const key = "d30297dabd674007bb79c99470cf5dad";
const axiosCreate = axios.create({
  baseURL: "https://api.rawg.io/api",
});

const getGenreList = axiosCreate.get("/genres?key="+key);
export default{
    getGenreList
}