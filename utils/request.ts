import axios, { AxiosRequestConfig } from 'axios';

interface IRequest {
	method: 'GET' | 'POST' | 'DELETE' | 'PUT' | 'PATCH';
	url: string;
}
const baseURL = 'https://youtube-v31.p.rapidapi.com'

const axiosInstance = axios.create({
	baseURL,
	//withCredentials:true,
	timeout: 30000
});

axiosInstance.interceptors.response.use(
	response => {
		return Promise.resolve(response.data);
	},
	error => {
		const { response } = error;
		return Promise.reject(response || error);
	}
);

export default function request(options: IRequest) {
	return axiosInstance({
		...options,
		headers: {
            'X-RapidAPI-Key': 'cc11434ae5msh2983f73c1f648d1p12d45ejsn1b01dcddd524',
            'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
          }
	})
		.then(response => response)
		.catch(error => error);
}