import axios from "axios";

const axiosBaseUrl = axios.create({
    baseURL: "http://localhost:8000/api",
});

axiosBaseUrl.defaults.withCredentials = true;

const res = await axiosBaseUrl.post("/login", {
    email: "test@example.com",
    password: "password",
});

const token = res.data.token;

export default axiosBaseUrl.create({
    headers: {
        Authorization: `Bearer ${token}`,
    },
});
