import axios from 'axios';

const API_URL = 'http://localhost:8080/api/users';

export const getUser = async (userId) => {
    const response = await axios.get(`${API_URL}/${userId}`);
    return response.data;
};
