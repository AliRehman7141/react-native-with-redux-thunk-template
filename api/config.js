import axios from 'axios';

import { store } from '../store'

const WEBSITE_LINK = `http://www.google.com`;

const ROOT_URL = 'https://google.com';

const BASE_URL = `${ROOT_URL}/api`;


const SUPPORT_LINK = `https://google.com/contact_us`;
const EULA_LINK = `https://google.com/EULA`;
const PRIVACY_POLICY_LINK = `https://google.com/privacy`;

const client = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
  timeout: 16000
});

client.interceptors.request.use(
  async (config) => {
    const requestConfig = config;
    const { authToken } = store.getState().userSession
    if (authToken != null) {
      // console.log('authToken-->', authToken)
      requestConfig.headers = {
        'Authorization': `Bearer ${authToken}`,
      };
    }
    return requestConfig;
  },
  (err) => {
    console.log('client.interceptors-->err', err)
    return Promise.reject(err);
  },
);

export {
  ROOT_URL,
  BASE_URL,
  client,
  WEBSITE_LINK,
  SUPPORT_LINK,
  EULA_LINK,
  PRIVACY_POLICY_LINK,
};
