import axios from 'axios';

export const request = (method, data, url) => axios({ method, url, data });
