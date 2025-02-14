import axios from "axios";

const apiFetch = axios.create({
    baseURL: 'https://crud-fullstack-backend-git-main-giovanaassis-projects.vercel.app/api',
    headers: {
        "Content-Type": "application/json"
    }
});

export default apiFetch;