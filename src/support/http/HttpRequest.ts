import axios from 'axios';
import Env from '@/../env.json';

const HttpRequest = axios.create({
  baseURL: Env.BASE_URL,
});

export default HttpRequest;
