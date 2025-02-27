import axios from 'axios';
import jwtDefaultConfig from './jwtDefaultConfig';

export default class JwtService {
  jwtConfig = { ...jwtDefaultConfig };

  isAlreadyFetchingAccessToken = false;
  subscribers = [];

  constructor(jwtOverrideConfig) {
    this.jwtConfig = { ...this.jwtConfig, ...jwtOverrideConfig };

    // Set base URL for axios
    axios.defaults.baseURL = this.jwtConfig.baseURL || 'http://localhost:3000'; // Your backend API URL

    // Request interceptor to add Authorization header
    axios.interceptors.request.use(
      config => {
        const accessToken = this.getToken();
        if (accessToken) {
          config.headers.Authorization = `${this.jwtConfig.tokenType} ${accessToken}`;
        }
        return config;
      },
      error => Promise.reject(error)
    );

    // Response interceptor for handling 401 errors
    axios.interceptors.response.use(
      response => response,
      error => {
        const { config, response } = error;
        const originalRequest = config;

        if (response && response.status === 401) {
          if (!this.isAlreadyFetchingAccessToken) {
            this.isAlreadyFetchingAccessToken = true;
            this.refreshToken().then(r => {
              this.isAlreadyFetchingAccessToken = false;
              this.setToken(r.data.accessToken);
              this.setRefreshToken(r.data.refreshToken);
              this.onAccessTokenFetched(r.data.accessToken);
            });
          }

          const retryOriginalRequest = new Promise(resolve => {
            this.addSubscriber(accessToken => {
              originalRequest.headers.Authorization = `${this.jwtConfig.tokenType} ${accessToken}`;
              resolve(axios(originalRequest));
            });
          });
          return retryOriginalRequest;
        }
        return Promise.reject(error);
      }
    );
  }

  onAccessTokenFetched(accessToken) {
    this.subscribers = this.subscribers.filter(callback => callback(accessToken));
  }

  addSubscriber(callback) {
    this.subscribers.push(callback);
  }

  getToken() {
    return localStorage.getItem(this.jwtConfig.storageTokenKeyName);
  }

  getRefreshToken() {
    return localStorage.getItem(this.jwtConfig.storageRefreshTokenKeyName);
  }

  setToken(value) {
    localStorage.setItem(this.jwtConfig.storageTokenKeyName, value);
  }

  setRefreshToken(value) {
    localStorage.setItem(this.jwtConfig.storageRefreshTokenKeyName, value);
  }

  login(email, password) {
    console.log('Sending login request:', { email, password });
    return axios
      .post(this.jwtConfig.loginEndpoint, { email, password })
      .then(response => {
        console.log('Login successful:', response.data);
        this.setToken(response.data.accessToken);
        this.setRefreshToken(response.data.refreshToken);
        return response.data; // Return tokens or any relevant data
      })
      .catch(error => {
        if (error.response) {
          console.error('Error Response Status:', error.response.status);
          console.error('Error Response Data:', error.response.data);
        } else {
          console.error('Error Message:', error.message);
        }
        throw error; // Propagate the error to handle it in the component
      });
  }

  register(...args) {
    return axios.post(this.jwtConfig.registerEndpoint, ...args);
  }

  refreshToken() {
    return axios.post(this.jwtConfig.refreshEndpoint, {
      refreshToken: this.getRefreshToken()
    });
  }
}
