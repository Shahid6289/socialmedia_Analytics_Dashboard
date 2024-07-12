import axios from 'axios';

const API_URL = 'http://localhost:8080/api/analytics';

export const getAnalytics = async (userId) => {
    const response = await axios.get(`${API_URL}/${userId}`);
    return response.data;
};
