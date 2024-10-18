import axios from "axios";

const hotelAxios = axios.create({
    baseURL: "http://localhost:4000",
    headers: {
        accept: "application/json",
    },
});

export default hotelAxios;