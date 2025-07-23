// src/axiosConfig.js
import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://expence-management-system.onrender.com/api/v1', // ✅ Your backend Render URL
  withCredentials: true, // optional, only if you use cookies/sessions
});

export default instance;
