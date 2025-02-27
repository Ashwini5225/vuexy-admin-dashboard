// ** Auth Endpoints
export default {
  loginEndpoint: 'https://demos.pixinvent.com/vuexy-vuejs-admin-template/demo-1/apps/academy/dashboard',
  registerEndpoint: 'http://localhost:5000/api/register',
  refreshEndpoint: 'http://localhost:5000/api/refresh-token',
  logoutEndpoint: 'http://localhost:5000/api/logout',

  tokenType: 'Bearer',
  storageTokenKeyName: 'accessToken',
  storageRefreshTokenKeyName: 'refreshToken'
};

