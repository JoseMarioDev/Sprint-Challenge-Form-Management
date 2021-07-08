import axios from 'axios';

export const axiosWithAuth = () => {
  const token = localStorage.getItem('token');

  return axios.create({
    headers: {
      'Content-Type': 'application/json',
      authorization: `${token}`,
    },
    baseURL: 'https://localhost:5000/api',
  });
};
