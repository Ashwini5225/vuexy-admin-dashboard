;  // Ensure this matches the actual filename
import jwtDefaultConfig from './jwtDefaultConfig';
import JwtService from '/src/auth/jwt/jwtService';

const useJwt = new JwtService(jwtDefaultConfig);

export default useJwt;
