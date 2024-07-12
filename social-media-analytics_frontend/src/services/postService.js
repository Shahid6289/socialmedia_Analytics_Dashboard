import axios from 'axios';

const API_URL = 'http://localhost:8080/api/posts';

export const getPosts = async (userId) => {
    const response = await axios.get(`${API_URL}?userId=${userId}`);
    return response.data;
};
