import axios, {isCancel, AxiosError} from 'axios';

const axiosInstance = axios.create({
  // withCredentials: true,
  // baseURL: 'http://localhost:3000/api/',   //👈 check vite.config server for end-point -- CORS  PROXY ERROR
  headers: {
    'Content-Type': 'application/json; charset=UTF-8; imageFile.type',
    'Accept': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, PATCH, POST, DELETE, OPTIONS'
  }
})

export default axiosInstance


