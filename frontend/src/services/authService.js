import axios from "axios";

const API = axios.create({
    baseURL: "http://localhost:8080/api",
});

export const loginUser = async (loginData) => {
    const response = await API.post("/auth/login", loginData);

    return response.data;
};

export default API;