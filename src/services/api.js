import axios from 'axios';

const BASE_URL = 'https://assignment.stage.crafto.app';

export const login = (username, otp) => {
  return axios.post(`${BASE_URL}/login`, { username, otp });
};

export const uploadMedia = (file) => {
  const formData = new FormData();
  formData.append('file', file);
  return axios.post('https://crafto.app/crafto/v1.0/media/assignment/upload', formData, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  });
};

export const createQuote = (token, text, mediaUrl) => {
  return axios.post(`${BASE_URL}/postQuote`, { text, mediaUrl }, {
    headers: {
      'Authorization': token,
      'Content-Type': 'application/json'
    }
  });
};

export const getQuotes = (token, limit, offset) => {
  return axios.get(`${BASE_URL}/getQuotes`, {
    params: { limit, offset },
    headers: {
      'Authorization': token
    }
  });
};
