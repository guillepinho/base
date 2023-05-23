import axios from 'axios';
import convertParams from '../utils/convertParams';

const API_URL = import.meta.env.VITE_API_URL;

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Access-Control-Allow-Origin': '*',
    Authorization: '',
  },
});

/**
 *
 * @param {String}  path      A string, containing the path to reach
 * @param {Object}  payload   The payload object
 * @param {String}  token     A string contaning the JWT token
 * @returns The data fetched
 */
const post = async (path, payload, token = '') => {
  const { data } = await api.post(path, payload, { headers: { Authorization: token } });
  return data;
};

/**
 *
 * @param {String}  path      A string, containing the path to reach
 * @param {Token}   token     A string contaning the JWT token
 * @param {String}  params    A Object containing all params to be passed to the URL
 * @returns The data fetched
 */
const get = async (path, token = '', params = {}) => {
  const searchParams = convertParams(params);
  const url = `${path}${searchParams}`;
  const { data } = await api.get(url, { headers: { Authorization: token } });
  return data;
};

const httpRequests = {
  post,
  get,
};

export default httpRequests;
