import axios, { AxiosInstance } from 'axios';

export default function getInstance(): AxiosInstance {
  return axios.create({
    baseURL: 'https://livepeer.com/api',
    timeout: 15000,
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Bearer ${process.env.LIVEPEER_API_KEY}`
    },
  });
}
